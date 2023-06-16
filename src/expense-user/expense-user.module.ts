import { Module } from '@nestjs/common';
import { ExpenseUserController } from './expense-user.controller';
import { ExpenseUserService } from './expense-user.service';

@Module({
  controllers: [ExpenseUserController],
  providers: [ExpenseUserService],
  exports: [ExpenseUserService],
})
export class ExpenseUserModule {}
