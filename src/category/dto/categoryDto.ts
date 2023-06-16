import { IsNotEmpty } from 'class-validator';

export class CategoryDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly userId: number;
}
