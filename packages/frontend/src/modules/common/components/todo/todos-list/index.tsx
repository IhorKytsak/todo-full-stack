import { CardActions } from '@mui/material';

import TodoTitleWithDesc from '../todo-title-with-desc';
import { TodoActions } from '../todo-actions';
import { ITodo, ITodoUpdate } from '../../../types/todo.types';
import { Loader } from '../../loader';
import TodosEmpty from '../todos-empty';

interface TodosListProps {
  isPending: boolean;
  todos: ITodo[];
  deleteTodoHandler: (id: number) => void;
  changeStatusHandler: (updatedTodo: ITodoUpdate) => void;
}

const TodosList = ({
  isPending,
  todos,
  deleteTodoHandler,
  changeStatusHandler
}: TodosListProps) => (
  <>
    {isPending && <Loader />}
    {!isPending && todos.length === 0 && <TodosEmpty />}
    {!isPending &&
      todos.length !== 0 &&
      todos.map((todo) => (
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
