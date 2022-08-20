import { Router } from 'express';

import todoController from '../../controllers/todo.controller';

const todosRouter: Router = Router();

todosRouter.get('', todoController.getAllTodo.bind(todoController));

export default todosRouter;
