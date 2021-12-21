import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  // recebe os parametros
  const { name, description } = request.body;

  // chama o servico
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  // executa algo
  createCategoryService.execute({ name, description });

  // da o retorno
  return response.status(201).json({ message: 'categoria criada com sucesso' });
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.index();

  return response.status(200).json({ categories });
});

export { categoriesRoutes };
