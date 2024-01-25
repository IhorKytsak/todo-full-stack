import { useState } from 'react';
import { Box } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import TodosTable from '../todos-table';
import TodosList from '../todos-list';
import TodoSwiper from '../todo-swiper';
import { PAGE_SIZE, toastMessages } from '../../../consts';
import { ITodoFilters, ITodoUpdate } from '../../../types/todo.types';
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation
} from '../../../hooks/use-todo-mutations.hook';

import { useGetTodosQuery } from '../../../hooks/use-todo-queries.hook';
import TodosSearchFilterMenu from '../todos-search-filter-menu';

const TodoContainer = () => {
  const [filter, setFilter] = useState<ITodoFilters>({});
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const { isPending, error, data } = useGetTodosQuery({ ...filter, pageSize: PAGE_SIZE, page });
  const { mutate: deleteTodoMutation } = useDeleteTodoMutation(queryClient);
  const { mutate: updateTodoMutation } = useUpdateTodoMutation(queryClient);

  const deleteTodoHandler = (id: number) => {
    deleteTodoMutation(id);
  };

  const changeCompleteStatusHandler = ({ id, isCompleted }: ITodoUpdate) => {
    updateTodoMutation({ id, isCompleted });
  };

  if (error) {
    toast.error(toastMessages.TODO_GET_ERROR);
  }

  return (
    <>
      <TodosSearchFilterMenu setPage={setPage} setFilter={setFilter} />
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <TodosTable
          isPending={isPending}
          todos={data?.todos || []}
          changeCompleteStatusHandler={changeCompleteStatusHandler}
          deleteTodoHandler={deleteTodoHandler}
          count={data?.totalPages}
          page={page}
          setPage={setPage}
        />
      </Box>

      <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
        <TodoSwiper
          isPending={isPending}
          todos={data?.todos || []}
          changeStatusHandler={changeCompleteStatusHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      </Box>

      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <TodosList
          isPending={isPending}
          todos={data?.todos || []}
          changeStatusHandler={changeCompleteStatusHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      </Box>
    </>
  );
};

export default TodoContainer;
