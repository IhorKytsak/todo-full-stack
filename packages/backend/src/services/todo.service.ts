import { DeleteResult, UpdateResult, Like } from 'typeorm';

import { Todo } from '../entities/Todo.entity';
import { User } from '../entities/User.entity';
import { ITodoQuery, ITodoFilter, ITodo } from '../types/todos.type';
import { errorMassages } from '../consts/error-massage.const';

export default class TodoService {
  async findAll(
    userId: number,
    { search, isCompleted, isPrivate, page = '1', pageSize = '5' }: ITodoQuery
  ): Promise<{ todos: ITodo[]; totalPages: number; page: number }> {
    const findBy: ITodoFilter = { user: { id: userId } };

    if (search) {
      findBy.title = Like(`%${search}%`);
    }

    if (isCompleted) {
      findBy.isCompleted = isCompleted === 'true';
    }

    if (isPrivate) {
      findBy.isPrivate = isPrivate === 'true';
    }

    const [todos, totalCount] = await Todo.findAndCount({
      where: findBy,
      order: { id: 'DESC' },
      take: +pageSize,
      skip: (+page - 1) * +pageSize
    });

    const totalPages = Math.ceil(totalCount / +pageSize);

    return { todos, totalPages, page: +page };
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
