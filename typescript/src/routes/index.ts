import { Router } from 'express';

import { authenticateUserRouter } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specification.routes';
import { userRoute } from './user.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);

routes.use('/specification', specificationRoutes);
routes.use('/users', userRoute);

routes.use(authenticateUserRouter);

export { routes };
