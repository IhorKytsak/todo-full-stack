import { ITodo } from './todo.types';

class TodoModel implements ITodo {
  id: number;

  title: string;

  description: string;

  isCompleted: boolean;

  isPrivate: boolean;

  constructor(
    title: string,
    description: string,
    isPrivate: boolean,
    isCompleted: boolean,
    id: number = -1
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isPrivate = isPrivate;
    this.isCompleted = isCompleted;
  }
}

const createTodoModel = (todoFromServer: ITodo) =>
  new TodoModel(
    todoFromServer.title,
    todoFromServer.description,
    todoFromServer.isPrivate,
    todoFromServer.isCompleted,
    todoFromServer.id
  );

export { createTodoModel };

export default TodoModel;
