import { DeleteResult, UpdateResult } from 'typeorm';
import { TodoEntity } from '../entities/Todo.entity';
import { ITodo } from '../types/todos.type';

export default class TodoService {
  async findAll(): Promise<ITodo[]> {
    const todos = await TodoEntity.find();
    return todos;
  }

  async findOne(id: number): Promise<ITodo | null> {
    const todo = await TodoEntity.findOneBy({ id });
    return todo;
  }

  async addTodo(newTodo: ITodo): Promise<ITodo> {
    const todoToCreate = TodoEntity.create({ ...newTodo });
    await todoToCreate.save();
    return todoToCreate;
  }

  async updateTodo(id: number, body: ITodo): Promise<UpdateResult> {
    const updateResult = await TodoEntity.update({ id }, { ...body });

    return updateResult;
  }

  async deleteTodo(todoId: number): Promise<DeleteResult> {
    const deleteResult = await TodoEntity.delete(todoId);

    return deleteResult;
  }
}
