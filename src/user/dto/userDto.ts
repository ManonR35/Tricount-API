import { IsNotEmpty, IsEmail } from 'class-validator'

export class UserDto {
  @IsNotEmpty()
  readonly name: string
  @IsEmail()
  @IsNotEmpty()
  readonly email: string
}