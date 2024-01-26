import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { useInView } from 'react-intersection-observer';

import { Loader } from '../../loader';
import TodosEmpty from '../../todo/todos-empty';
import { useGetPublicTodosInfiniteQuery } from '../../../hooks/use-todo-queries.hook';
import { PAGE_SIZE, toastMessages } from '../../../consts';
import TodoTitleWithDesc from '../../todo/todo-title-with-desc';
import { SPACES } from '../../../../theme';

const PublicTodosList = () => {
  const { ref, inView } = useInView();
  const { data, isFetching, isError, hasNextPage, fetchNextPage } = useGetPublicTodosInfiniteQuery({
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
            <Typography
              textAlign="right"
              margin={3}
              variant="subtitle1"
              color="text.secondary"
              mt={SPACES.l}
            >
              {todo.user.email}
            </Typography>
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

export default PublicTodosList;
