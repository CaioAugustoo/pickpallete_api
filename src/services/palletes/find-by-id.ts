import { PalleteRepository } from '../../repositories';

class FindPalleteById {
  static async execute(id: string) {
    return await PalleteRepository.findById(id);
  }
}

export { FindPalleteById };
