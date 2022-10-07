import { PalleteRepository } from '../../repositories';

class ListAllPalletes {
  static async execute(page: number = 1) {
    return await PalleteRepository.listAll(page);
  }
}

export { ListAllPalletes };
