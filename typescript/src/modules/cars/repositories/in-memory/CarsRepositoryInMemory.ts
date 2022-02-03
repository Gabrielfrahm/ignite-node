import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name,
    license_plate,
    description,
    fine_amount,
    daily_rate,
    available,
    category_id,
    brand,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      name,
      license_plate,
      description,
      fine_amount,
      daily_rate,
      available,
      category_id,
      brand,
    });

    this.cars.push(car);
  }
}

export { CarRepositoryInMemory };
