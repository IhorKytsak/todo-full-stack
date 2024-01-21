import { CardActions } from '@mui/material';

import TodoTitleWithDesc from '../todo-title-with-desc';
import { TodoActions } from '../todo-actions';
import { ITodo, ITodoUpdate } from '../../../types/todo.types';

interface TodosListProps {
  todos: ITodo[];
  deleteTodoHandler: (id: number) => void;
  changeStatusHandler: (updatedTodo: ITodoUpdate) => void;
}

const TodosList = ({ todos, deleteTodoHandler, changeStatusHandler }: TodosListProps) => (
  <>
    {todos.map((todo) => (
      <TodoTitleWithDesc key={todo.id} todo={todo}>
        <CardActions>
          <TodoActions
            deleteHandler={() => {
              deleteTodoHandler(todo.id!);
            }}
            checkboxHandler={() => {
              changeStatusHandler({ id: todo.id!, isCompleted: !todo.isCompleted });
            }}
            todoId={todo.id!}
            isCompleted={todo.isCompleted}
          />
        </CardActions>
      </TodoTitleWithDesc>
    ))}
  </>
);

export default TodosList;
