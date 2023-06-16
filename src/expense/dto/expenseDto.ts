import { ExpensesOnUsers, User } from '@prisma/client';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class ExpenseDto {
  @IsNotEmpty()
  readonly amount: number;
  @IsNumber()
  @IsNotEmpty()
  readonly categoryId: number;
  @IsNotEmpty()
  readonly users: number[];
  @IsNumber()
  @IsNotEmpty()
  readonly paidBy: number;
}
