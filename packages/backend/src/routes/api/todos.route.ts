import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import { tryCatch } from '../../middlewares/try-catch.middleware';
import { isExist } from '../../middlewares/is-exists.middleware';
import { validateReqBody } from '../../middlewares/validation.middleware';
import { authRequired } from '../../middlewares/auth.middleware';
import {
  todoCreateValidationSchema,
  todoUpdateValidationSchema
} from '../../validation/validation.schema';
import { Todo } from '../../entities/Todo.entity';

const todosRouter: Router = Router();

todosRouter.get('', authRequired, tryCatch(todoController.getAllTodo.bind(todoController)));

todosRouter.get(
  '/:id',
  authRequired,
  isExist(Todo),
  tryCatch(todoController.getTodo.bind(todoController))
);

todosRouter.post(
  '/create',
  authRequired,
  validateReqBody(todoCreateValidationSchema),
  tryCatch(todoController.addTodo.bind(todoController))
);

todosRouter.put(
  '/update/:id',
  authRequired,
  isExist(Todo),
  validateReqBody(todoUpdateValidationSchema),
  tryCatch(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  '/delete/:id',
  authRequired,
  isExist(Todo),
  tryCatch(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
