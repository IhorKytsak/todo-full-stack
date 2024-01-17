import { Router } from 'express';

import todoController from '../../controllers/todo.controller';

const todosRouter: Router = Router();

todosRouter.get('', todoController.getAllTodo.bind(todoController));

todosRouter.get('/:id', todoController.getTodo.bind(todoController));

todosRouter.post('/create', todoController.addTodo.bind(todoController));

todosRouter.put('/update/:id', todoController.updateTodo.bind(todoController));

todosRouter.delete('/delete/:id', todoController.deleteTodo.bind(todoController));

export default todosRouter;
