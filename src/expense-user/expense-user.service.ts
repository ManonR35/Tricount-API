import { Injectable } from '@nestjs/common';
import { ExpenseUserDto } from './dto/expenseUserDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExpenseUserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createExpenseUser({
    expenseId,
    userId,
  }: {
    expenseId: number;
    userId: number;
  }) {
    return await this.prismaService.expensesOnUsers.create({
      data: {
        expenseId,
        userId,
      },
    });
  }

  async getExpenseUsers(): Promise<ExpenseUserDto[]> {
    return this.prismaService.expensesOnUsers.findMany();
  }

  async getExpenseUsersByExpenseId(id: number) {
    const expenseOnUsers = await this.prismaService.expensesOnUsers.findMany({
      where: { expenseId: id },
      include: {
        user: true,
      },
    });

    return expenseOnUsers.map((expenseUser) => expenseUser.user);
  }

  // async updateExpenseUser(id: Number, data: Partial<ExpenseUserDto>): Promise<ExpenseUserDto> {
  //   return this.prismaService.expensesOnUsers.update({ where: { ExpenseUserId: Number(id) }, data });
  // }

  // async deleteExpenseUser(id: Number): Promise<ExpenseUserDto> {
  //   return this.prismaService.expensesOnUsers.delete({ where: { id: Number(id) } });
  // }
}
