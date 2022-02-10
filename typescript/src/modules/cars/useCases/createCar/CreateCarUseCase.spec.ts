import { CarRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'New car',
      description: 'Teste Car',
      daily_rate: 100,
      license_plate: '1234',
      fine_amount: 60,
      brand: 'teste car',
      category_id: 'category',
    });

    expect(car).toHaveProperty('id');
  });

  it('should not be able create a new car with same license plate', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'New car',
        description: 'Teste Car',
        daily_rate: 100,
        license_plate: '1234',
        fine_amount: 60,
        brand: 'teste car',
        category_id: 'category',
      });
      await createCarUseCase.execute({
        name: 'New car2',
        description: 'Teste Car2',
        daily_rate: 100,
        license_plate: '1234',
        fine_amount: 60,
        brand: 'teste car',
        category_id: 'category',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'New car2',
      description: 'Teste Car2',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'teste car',
      category_id: 'category',
    });
    console.log(car);

    expect(car.available).toBe(true);
  });
});
