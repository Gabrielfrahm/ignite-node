import { inject, injectable } from 'tsyringe';

import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

// injectable();
class ListCarUseCase {
  constructor(
    // @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}
  async execute({ name, brand, category_id }: IRequest): Promise<Car[]> {
    return this.carsRepository.findAllAvailable(brand, category_id, name);
  }
}

export { ListCarUseCase };
