import { CreatePalleteDto } from '../../dtos';
import { prisma } from '../../lib/prisma';
import { PalleteRepository } from '../../repositories';
import { HttpException } from '../../exceptions';
import { validateCreatePallete } from '../../validations';

class CreatePallete {
  static async execute(data: CreatePalleteDto) {
    const validationErrors = validateCreatePallete(data);

    Object.values(validationErrors || {}).forEach((error: string) => {
      throw new HttpException(403, error);
    });

    return await PalleteRepository.create(data);
  }
}

export { CreatePallete };
