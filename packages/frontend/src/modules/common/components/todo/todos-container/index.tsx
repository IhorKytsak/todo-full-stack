import { useState } from 'react';
import { Box } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';

import TodosTable from '../todos-table';
import TodosList from '../todos-list';
import TodoSwiper from '../todo-swiper';
import { ITodoFilters, ITodoUpdate } from '../../../types/todo.types';
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation
} from '../../../hooks/use-todo-mutations.hook';

import TodosSearchFilterMenu from '../todos-search-filter-menu';

const TodoContainer = () => {
  const [filter, setFilter] = useState<ITodoFilters>({});
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const { mutate: deleteTodoMutation } = useDeleteTodoMutation(queryClient);
  const { mutate: updateTodoMutation } = useUpdateTodoMutation(queryClient);

  const deleteTodoHandler = (id: number) => {
    deleteTodoMutation(id);
  };

  const changeCompleteStatusHandler = ({ id, isCompleted }: ITodoUpdate) => {
    updateTodoMutation({ id, isCompleted });
  };

  return (
    <>
      <TodosSearchFilterMenu setPage={setPage} setFilter={setFilter} />
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <TodosTable
          changeCompleteStatusHandler={changeCompleteStatusHandler}
          deleteTodoHandler={deleteTodoHandler}
          page={page}
          setPage={setPage}
          filter={filter}
        />
      </Box>

      <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
        <TodoSwiper
          changeStatusHandler={changeCompleteStatusHandler}
          deleteTodoHandler={deleteTodoHandler}
          filter={filter}
        />
      </Box>

      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <TodosList
          changeStatusHandler={changeCompleteStatusHandler}
          deleteTodoHandler={deleteTodoHandler}
          filter={filter}
        />
      </Box>
    </>
  );
};

export default TodoContainer;
