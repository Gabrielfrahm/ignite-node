import { Router } from 'express';

import { AuthenticateController } from '../modules/account/useCases/authenticateUser/AuthenticateUserController';

const authenticateUserController = new AuthenticateController();

const authenticateUserRouter = Router();

authenticateUserRouter.post('/sessions', authenticateUserController.handle);

export { authenticateUserRouter };
