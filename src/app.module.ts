import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ExpenseModule } from './expense/expense.module';
import { CategoryModule } from './category/category.module';
import { ExpenseUserModule } from './expense-user/expense-user.module';

@Module({
  imports: [UserModule, ExpenseModule, ExpenseUserModule, PrismaModule, ConfigModule.forRoot({ isGlobal: true }), ExpenseModule, CategoryModule, ExpenseUserModule],
})
export class AppModule {}
