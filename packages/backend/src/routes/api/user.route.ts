import { Router } from 'express';
import userController from '../../controllers/user.controller';
import { validateReqBody } from '../../middlewares/validation.middleware';
import { userValidationSchema } from '../../validation/validation.schema';
import { tryCatch } from '../../middlewares/try-catch.middleware';

const userRouter: Router = Router();

userRouter.post(
  '/register',
  validateReqBody(userValidationSchema),
  tryCatch(userController.registerUser.bind(userController))
);
userRouter.post(
  '/login',
  validateReqBody(userValidationSchema),
  tryCatch(userController.loginUser.bind(userController))
);

export default userRouter;
