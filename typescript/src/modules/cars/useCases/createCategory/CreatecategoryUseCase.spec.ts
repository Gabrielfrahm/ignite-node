import { AppError } from '../../../../errors/AppError';
import { ICreateCategoryDTO } from '../../repositories/ICategoriesRepository';
import { CategoriesRepositoryInMemory } from '../../repositories/in-memory/CategoriesRepostoryInMemory';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it('should be ale to create a new category', async () => {
    const category: ICreateCategoryDTO = {
      name: 'Category 1',
      description: 'Category 1 description',
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be ale to create a new category with same name', async () => {
    expect(async () => {
      const category: ICreateCategoryDTO = {
        name: 'Category 1',
        description: 'Category 1 description',
      };

      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
