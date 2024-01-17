import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import { tryCatch } from '../../middlewares/try-catch.middleware';
import { isExist } from '../../middlewares/is-exists.middleware';
import { validateReqBody } from '../../middlewares/validation.middleware';
import {
  todoCreateValidationSchema,
  todoUpdateValidationSchema
} from '../../validation/validation.schema';
import { TodoEntity } from '../../entities/Todo.entity';

const todosRouter: Router = Router();

todosRouter.get('', tryCatch(todoController.getAllTodo.bind(todoController)));

todosRouter.get('/:id', isExist(TodoEntity), tryCatch(todoController.getTodo.bind(todoController)));

todosRouter.post(
  '/create',
  validateReqBody(todoCreateValidationSchema),
  tryCatch(todoController.addTodo.bind(todoController))
);

todosRouter.put(
  '/update/:id',
  isExist(TodoEntity),
  validateReqBody(todoUpdateValidationSchema),
  tryCatch(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  '/delete/:id',
  isExist(TodoEntity),
  tryCatch(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
