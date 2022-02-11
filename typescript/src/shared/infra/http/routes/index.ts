import { Router } from 'express';

import { authenticateUserRouter } from './authenticate.routes';
import { carRoutes } from './car.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specification.routes';
import { userRoute } from './user.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);

routes.use('/specifications', specificationRoutes);
routes.use('/users', userRoute);
routes.use('/cars', carRoutes);

routes.use(authenticateUserRouter);

export { routes };
