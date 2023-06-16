import { Module } from '@nestjs/common';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';
import { ExpenseUserModule } from 'src/expense-user/expense-user.module';

@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService],
  imports: [ExpenseUserModule],
})
export class ExpenseModule {}
