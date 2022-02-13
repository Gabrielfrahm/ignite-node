import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListAvailableCarController } from '@modules/cars/useCases/listAvailableCar/ListAvailableCarController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarController = new ListAvailableCarController();

carRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carRoutes.get('/available', listAvailableCarController.handle);

export { carRoutes };
