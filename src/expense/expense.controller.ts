import {
  Body,
  Controller,
  Post,
  Get,
  ParseIntPipe,
  Param,
  Delete,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseDto } from './dto/expenseDto';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  createExpense(@Body() ExpenseDto: ExpenseDto) {
    return this.expenseService.createExpense(ExpenseDto);
  }

  @Get(':id')
  getExpense(@Param('id', ParseIntPipe) id: number) {
    return this.expenseService.getExpense(+id);
  }

  @Get()
  getExpenses() {
    return this.expenseService.getExpenses();
  }

  @Get(':id/users')
  getUsersExpense(@Param('id', ParseIntPipe) id: number) {
    return this.expenseService.getUsersExpense(+id);
  }

  @Delete(':id')
  async deleteExpense(@Param('id', ParseIntPipe) id: number) {
    return this.expenseService.deleteExpense(id);
  }
}
