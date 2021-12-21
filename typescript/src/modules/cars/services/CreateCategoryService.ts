import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const checkCategory = this.categoriesRepository.findByName(name);

    if (checkCategory) {
      throw new Error('category already existis!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
