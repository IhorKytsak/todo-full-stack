import HttpService from './http.service';
import { BACKEND_KEYS } from '../common/consts/app-keys.const';
import { createTodoModel } from '../common/types/todo.model';
import { ITodo, ITodoParams, ITodoUpdate } from '../common/types/todo.types';

class TodoService extends HttpService {
  async getTodos(params: ITodoParams) {
    const { todos, totalPages, page } = await this.get({
      url: BACKEND_KEYS.TODOS.ROOT,
      params
    });

    return { todos: todos.map((todo: ITodo) => createTodoModel(todo)), totalPages, page };
  }

  async getPublicTodos(params: ITodoParams) {
    const { todos, totalPages, page } = await this.get(
      {
        url: BACKEND_KEYS.TODOS.PUBLIC,
        params
      },
      false
    );

    return { todos, totalPages, page };
  }

  async getTodo(id: number) {
    const data = await this.get({
      url: BACKEND_KEYS.TODOS.GETTODO(id)
    });

    return createTodoModel(data);
  }

  async createTodo(body: ITodo) {
    const data = await this.put({
      method: 'post',
      url: BACKEND_KEYS.TODOS.CREATE,
      data: body
    });

    return data;
  }

  async updateTodo({ id, ...body }: ITodoUpdate) {
    const data = await this.put({
      method: 'put',
      url: BACKEND_KEYS.TODOS.UPDATE(id!),
      data: body
    });

    return data;
  }

  async deleteTodo(id: number) {
    const data = await this.delete({
      method: 'delete',
      url: BACKEND_KEYS.TODOS.DELETE(id)
    });

    return data;
  }
}

export default new TodoService();
