import { Response, Request } from 'express';

import { ITodoQuery } from '../types/todos.type';
import { User } from '../entities/User.entity';
import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: Request, res: Response) {
    const { id: userId } = req.user as User;
    const query = req.query as ITodoQuery;
    const todos = await this.todoService.findAll(userId, query);

    res.send(todos);
  }

  async getPublicTodo(req: Request, res: Response) {
    const query = req.query as ITodoQuery;
    const todos = await this.todoService.findAllPublic(query);

    res.send(todos);
  }

  async getTodo(req: Request, res: Response) {
    const { id: userId } = req.user as User;
    const todoId = Number(req.params.id);
    const todo = await this.todoService.findOne(userId, todoId);

    res.send(todo);
  }

  async addTodo({ body, user }: Request, res: Response) {
    const { id: userId } = user as User;
    const todo = await this.todoService.addTodo(userId, body);

    res.send(todo);
  }

  async updateTodo({ body, params }: Request, res: Response) {
    const id = Number(params.id);
    const todo = await this.todoService.updateTodo(id, body);

    res.send(todo);
  }

  async deleteTodo(req: Request, res: Response) {
    const id = Number(req.params.id);
    const todo = await this.todoService.deleteTodo(id);

    res.send(todo);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
