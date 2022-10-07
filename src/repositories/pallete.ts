import { CreatePalleteDto } from '../dtos';
import { prisma } from '../lib/prisma';
import { getPaginationPage } from '../utils';

class PalleteRepository {
  static async create(data: CreatePalleteDto) {
    return await prisma.pallete.create({ data });
  }

  static async findById(id: string) {
    return await prisma.pallete.findUnique({ where: { id } });
  }

  static async listAll(page?: number) {
    return await prisma.pallete.findMany(getPaginationPage(page));
  }
}

export { PalleteRepository };
