import { Response, Request } from 'express';
import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(_: Request, res: Response) {
    const todos = await this.todoService.findAll();

    res.send(todos);
  }

  async getTodo(req: Request, res: Response) {
    const id = Number(req.params.id);
    const todo = await this.todoService.findOne(id);

    res.send(todo);
  }

  async addTodo({ body }: Request, res: Response) {
    const todo = await this.todoService.addTodo(body);

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
