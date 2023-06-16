import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExpenseDto } from './dto/expenseDto';
import { ExpenseUserService } from '../expense-user/expense-user.service';

@Injectable()
export class ExpenseService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly expenseUserService: ExpenseUserService,
  ) {}

  async createExpense(ExpenseDto: ExpenseDto) {
    const { amount, categoryId, paidBy, users } = ExpenseDto;
    const createExpense = await this.prismaService.expense.create({
      data: {
        amount,
        category: {
          connect: {
            categoryId,
          },
        },
        payer: {
          connect: {
            userId: paidBy,
          },
        },
      },
    });

    for await (const userId of users) {
      await this.expenseUserService.createExpenseUser({
        expenseId: createExpense.expenseId,
        userId: +userId,
      });
    }

    return createExpense;
  }

  async getExpenses() {
    return await this.prismaService.expense.findMany({
      include: {
        users: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc', // Sort by the createdAt field in ascending order (oldest first)
      },
    });
  }

  async getExpense(id: number) {
    return this.prismaService.expense.findUnique({
      where: { expenseId: id },
    });
  }

  async getUsersExpense(id: number) {
    return await this.expenseUserService.getExpenseUsersByExpenseId(id);
  }

  async deleteExpense(id: number) {
    return this.prismaService.expense.delete({ where: { expenseId: id } });
  }
}
