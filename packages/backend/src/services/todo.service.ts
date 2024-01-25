import { DeleteResult, UpdateResult, Like } from 'typeorm';

import { Todo } from '../entities/Todo.entity';
import { User } from '../entities/User.entity';
import { ITodoQuery, ITodoFilter, ITodo } from '../types/todos.type';
import { errorMassages } from '../consts/error-massage.const';

export default class TodoService {
  async findAll(userId: number, query: ITodoQuery): Promise<ITodo[]> {
    const findBy: ITodoFilter = { user: { id: userId } };

    if (query.search) {
      findBy.title = Like(`%${query.search}%`);
    }

    if (query.isCompleted) {
      findBy.isCompleted = query.isCompleted === 'true';
    }

    if (query.isPrivate) {
      findBy.isPrivate = query.isPrivate === 'true';
    }

    const todos = await Todo.find({ where: findBy, order: { id: 'DESC' } });
    return todos;
  }

  async findOne(userId: number, id: number): Promise<ITodo | null> {
    const todo = await Todo.findOneBy({ id, user: { id: userId } });
    return todo;
  }

  async addTodo(userId: number, newTodo: ITodo): Promise<ITodo> {
    const user = await User.findOneBy({ id: userId });

    if (!user) {
      throw new Error(errorMassages.USER_NOT_FOUND);
    }

    const todoToCreate = Todo.create({ ...newTodo, user });
    await todoToCreate.save();
    return todoToCreate;
  }

  async updateTodo(id: number, body: ITodo): Promise<UpdateResult> {
    const updateResult = await Todo.update({ id }, { ...body });

    return updateResult;
  }

  async deleteTodo(todoId: number): Promise<DeleteResult> {
    const deleteResult = await Todo.delete(todoId);

    return deleteResult;
  }
}
