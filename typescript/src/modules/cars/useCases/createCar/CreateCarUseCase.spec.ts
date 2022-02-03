import { CarRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able create a new car', async () => {
    await createCarUseCase.execute({
      name: 'New car',
      description: 'Teste Car',
      daily_rate: 100,
      license_plate: '1234',
      fine_amount: 60,
      brand: 'teste car',
      available: true,
      category_id: 'category',
    });
  });
});
