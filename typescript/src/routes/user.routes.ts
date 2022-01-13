import { Router } from 'express';

import { CreateUserController } from '../modules/account/useCases/createUser/CreateUserController';

const createUserController = new CreateUserController();

const userRoute = Router();

userRoute.post('/', createUserController.handle);

export { userRoute };
