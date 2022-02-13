import { getRepository, Repository } from 'typeorm';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name,
    description,
    brand,
    daily_rate,
    fine_amount,
    license_plate,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      brand,
      daily_rate,
      fine_amount,
      license_plate,
      category_id,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.repository.findOne({ license_plate });
  }

  async findAllAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const carQuery = this.repository
      .createQueryBuilder('c')
      .where('available = :available', { available: true });

    if (brand) {
      carQuery.andWhere('c.brand = :brand', { brand });
    }

    if (name) {
      carQuery.andWhere('c.name = :name', { name });
    }

    if (category_id) {
      carQuery.andWhere('c.category_id = :category_id', { category_id });
    }

    return carQuery.getMany();
  }
}

export { CarsRepository };
