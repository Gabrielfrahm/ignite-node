import { container } from 'tsyringe';

import { UsersRepository } from '@modules/account/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/account/repositories/IUsersRepository';
import { CarsImageRepository } from '@modules/cars/infra/typeorm/repositories/CarsImageRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationRepository';
import { ICarsImageRepository } from '@modules/cars/repositories/ICarsImageRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository';

// categories
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

// specification
container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository
);

// user
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

// car
container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

// car images
container.registerSingleton<ICarsImageRepository>(
  'CarsImageRepository',
  CarsImageRepository
);
