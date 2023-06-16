import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './dto/categoryDto';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async createCategory(CategoryDto: CategoryDto): Promise<CategoryDto> {
    const { name, userId } = CategoryDto;
    return await this.prismaService.category.create({
      data: {
        name,
        user: {
          connect: {
            userId,
          },
        },
      },
    });
  }

  async getCategories(): Promise<CategoryDto[]> {
    return this.prismaService.category.findMany();
  }

  async getCategoryById(id: number): Promise<CategoryDto> {
    return this.prismaService.category.findUnique({
      where: { categoryId: Number(id) },
    });
  }

  async updateCategory(
    id: number,
    data: Partial<CategoryDto>,
  ): Promise<CategoryDto> {
    return this.prismaService.category.update({
      where: { categoryId: Number(id) },
      data,
    });
  }

  async delete(id: number): Promise<CategoryDto> {
    return this.prismaService.category.delete({
      where: { categoryId: Number(id) },
    });
  }
}
