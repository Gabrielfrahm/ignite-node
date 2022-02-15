import { CarRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { SpecificationsRepositoryInMemory } from '@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let carRepositoryInMemory: CarRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;
let createCarSpecification: CreateCarSpecificationUseCase;

describe('Create Car Specification', () => {
  beforeEach(() => {
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    carRepositoryInMemory = new CarRepositoryInMemory();
    createCarSpecification = new CreateCarSpecificationUseCase(
      carRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it('should not be able to add a new specification to the now-existis car', async () => {
    expect(async () => {
      const car_id = '1234';
      const specifications_id = ['123456'];
      await createCarSpecification.execute({ car_id, specifications_id });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to add a new specification to the car', async () => {
    const car = await carRepositoryInMemory.create({
      name: 'New car',
      description: 'Teste Car',
      daily_rate: 100,
      license_plate: '1234',
      fine_amount: 60,
      brand: 'teste car',
      category_id: 'category',
    });
    const specification = await specificationsRepositoryInMemory.create({
      name: 'test',
      description: 'test',
    });

    const specifications_id = [specification.id];
    const specificationCar = await createCarSpecification.execute({
      car_id: car.id,
      specifications_id,
    });

    expect(specificationCar).toHaveProperty('specifications');
    expect(specificationCar.specifications.length).toBe(1);
  });
});
