import { useEffect } from 'react';
import { Box, CardActions } from '@mui/material';
import { toast } from 'react-toastify';
import { useInView } from 'react-intersection-observer';

import TodoTitleWithDesc from '../todo-title-with-desc';
import { TodoActions } from '../todo-actions';
import { ITodoFilters, ITodoUpdate } from '../../../types/todo.types';
import { Loader } from '../../loader';
import TodosEmpty from '../todos-empty';
import { useGetTodosInfiniteQuery } from '../../../hooks/use-todo-queries.hook';
import { PAGE_SIZE, toastMessages } from '../../../consts';

interface TodosListProps {
  deleteTodoHandler: (id: number) => void;
  changeStatusHandler: (updatedTodo: ITodoUpdate) => void;
  filter: ITodoFilters;
}

const TodosList = ({ deleteTodoHandler, changeStatusHandler, filter }: TodosListProps) => {
  const { ref, inView } = useInView();
  const { data, isFetching, isError, hasNextPage, fetchNextPage } = useGetTodosInfiniteQuery({
    ...filter,
    pageSize: PAGE_SIZE
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) fetchNextPage();
  }, [inView]);

  const todos = data?.pages.map((page) => page.todos).flat() || [];

  if (isError) {
    toast.error(toastMessages.TODO_GET_ERROR);
  }

  return (
    <>
      {!isFetching && todos.length === 0 && <TodosEmpty />}
      {todos.length !== 0 &&
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
      {(hasNextPage || isFetching) && (
        <Box sx={{ pb: '50px' }} ref={ref}>
          <Loader />
        </Box>
      )}
    </>
  );
};

export default TodosList;
