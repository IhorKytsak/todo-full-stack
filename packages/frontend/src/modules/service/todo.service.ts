import HttpService from './http.service';
import { BACKEND_KEYS } from '../common/consts/app-keys.const';
import { createTodoModel } from '../common/types/todo.model';
import { ITodo } from '../common/types/todo.types';

class TodoService extends HttpService {
  async getTodos() {
    const data = await this.get({
      url: BACKEND_KEYS.ROOT
    });

    return data.map((todo: ITodo) => createTodoModel(todo));
  }

  async createTodo(body: ITodo) {
    const data = await this.put({
      method: 'post',
      url: BACKEND_KEYS.CREATE,
      data: body
    });

    return data;
  }

  async updateTodo({ id, ...body }: ITodo) {
    const data = await this.put({
      method: 'put',
      url: BACKEND_KEYS.UPDATE(id!),
      data: body
    });

    return data;
  }

  async deleteTodo({ id }: ITodo) {
    const data = await this.delete({
      method: 'delete',
      url: BACKEND_KEYS.DELETE(id!)
    });

    return data;
  }
}

export default new TodoService();
