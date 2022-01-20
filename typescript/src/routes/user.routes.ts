import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/account/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/account/useCases/updateUserAvatar/UpdateUserAvatarController';

const createUserController = new CreateUserController();
const updateUserAvatarUseCase = new UpdateUserAvatarController();

const userRoute = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

userRoute.post('/', createUserController.handle);
userRoute.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarUseCase.handle
);
export { userRoute };
