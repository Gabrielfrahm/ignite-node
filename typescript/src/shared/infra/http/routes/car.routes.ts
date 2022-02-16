import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { CreateCarSpecificationController } from '@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController';
import { ListAvailableCarController } from '@modules/cars/useCases/listAvailableCar/ListAvailableCarController';
import { UploadCarsImageController } from '@modules/cars/useCases/UploadCarsImage/UploadCarsImageController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarController = new ListAvailableCarController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarsImageController = new UploadCarsImageController();

const upload = multer(uploadConfig.upload('./tmp/cars'));

carRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carRoutes.get('/available', listAvailableCarController.handle);

carRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle
);

carRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  upload.array('images'),
  uploadCarsImageController.handle
);

export { carRoutes };
