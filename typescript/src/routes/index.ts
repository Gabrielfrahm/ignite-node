import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specification.routes';
import { userRoute } from './user.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);

routes.use('/specification', specificationRoutes);
routes.use('/users', userRoute);

export { routes };
