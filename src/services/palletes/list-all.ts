import { PalleteRepository } from '../../repositories';

class ListAllPalletes {
  static async execute(page?: number) {
    return await PalleteRepository.listAll(page);
  }
}

export { ListAllPalletes };
