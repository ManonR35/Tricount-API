import { ExpenseDto } from 'src/expense/dto/expenseDto';
import { UserDto } from 'src/user/dto/userDto';

export class ExpenseUserDto {
  // readonly expense: ExpenseDto;
  readonly expenseId: number;
  // readonly user: UserDto;
  readonly userId: number;
}
