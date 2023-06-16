import { Body, Controller, Post, Req, Get } from '@nestjs/common';
import { ExpenseService } from 'src/expense/expense.service';

@Controller('expense-user')
export class ExpenseUserController {}
