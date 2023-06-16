import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './dto/userDto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(UserDto: UserDto) {
    const { name, email } = UserDto;
    return await this.prismaService.user.create({
      data: {
        name,
        email,
      },
    });
  }

  async getUsers() {
    return this.prismaService.user.findMany();
  }

  async getUserById(id: Number) {
    return this.prismaService.user.findUnique({
      where: { userId: Number(id) },
    });
  }

  async updateUser(id: Number, data: Partial<UserDto>) {
    return this.prismaService.user.update({
      where: { userId: Number(id) },
      data,
    });
  }

  async deleteUser(id: Number) {
    return this.prismaService.user.delete({ where: { userId: Number(id) } });
  }
}
