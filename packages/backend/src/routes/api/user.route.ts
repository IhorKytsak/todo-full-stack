import { Router } from 'express';
import userController from '../../controllers/user.controller';
import { validateReqBody } from '../../middlewares/validation.middleware';
import {
  userValidationSchema,
  passwordRecoveryValidationSchema,
  changePasswordValidationSchema
} from '../../validation/validation.schema';
import { tryCatch } from '../../middlewares/try-catch.middleware';
import { authRequired } from '../../middlewares/auth.middleware';

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
userRouter.post(
  '/recover-password',
  validateReqBody(passwordRecoveryValidationSchema),
  tryCatch(userController.recoverUserPassword.bind(userController))
);

userRouter.post(
  '/change-password/:id',
  authRequired,
  validateReqBody(changePasswordValidationSchema),
  tryCatch(userController.changeUserPassword.bind(userController))
);

export default userRouter;
