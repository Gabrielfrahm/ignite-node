import { CarRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListCarUseCase } from './ListCarUseCase';

let listCarUseCase: ListCarUseCase;
let carRepositoryInMemory: CarRepositoryInMemory;

describe('list cars', () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    listCarUseCase = new ListCarUseCase(carRepositoryInMemory);
  });

  it('should be able to list available cars', async () => {
    const car = await carRepositoryInMemory.create({
      name: 'car',
      description: 'car_description',
      brand: 'car_brand',
      daily_rate: 0,
      fine_amount: 0,
      license_plate: 'car_license_plate',
      category_id: 'car_category_id',
    });

    const cars = await listCarUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carRepositoryInMemory.create({
      name: 'car',
      description: 'car_description',
      brand: 'car_brand',
      daily_rate: 0,
      fine_amount: 0,
      license_plate: 'car_license_plate',
      category_id: 'car_category_id',
    });

    const cars = await listCarUseCase.execute({
      brand: 'car_brand',
    });
    console.log(cars);
    expect(cars).toEqual([car]);
  });
});
