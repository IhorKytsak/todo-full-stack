import HttpService from './http.service';
import { BACKEND_KEYS } from '../common/consts/app-keys.const';
import { createTodoModel } from '../common/types/todo.model';
import { ITodo, ITodoUpdate } from '../common/types/todo.types';

class TodoService extends HttpService {
  async getTodos() {
    const data = await this.get({
      url: BACKEND_KEYS.ROOT
    });

    return data.map((todo: ITodo) => createTodoModel(todo));
  }

  async getTodo(id: number) {
    const data = await this.get({
      url: BACKEND_KEYS.GETTODO(id)
    });

    return createTodoModel(data);
  }

  async createTodo(body: ITodo) {
    const data = await this.put({
      method: 'post',
      url: BACKEND_KEYS.CREATE,
      data: body
    });

    return data;
  }

  async updateTodo({ id, ...body }: ITodoUpdate) {
    const data = await this.put({
      method: 'put',
      url: BACKEND_KEYS.UPDATE(id!),
      data: body
    });

    return data;
  }

  async deleteTodo(id: number) {
    const data = await this.delete({
      method: 'delete',
      url: BACKEND_KEYS.DELETE(id)
    });

    return data;
  }
}

export default new TodoService();
