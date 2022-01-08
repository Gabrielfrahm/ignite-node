import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import listCategoriesController from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

const upload = multer({ dest: './tmp' });

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) => {
  console.log('saabonete');
  return listCategoriesController().handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
