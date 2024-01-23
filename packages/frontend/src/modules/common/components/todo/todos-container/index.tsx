import { Box } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import TodosTable from '../todos-table';
import TodosList from '../todos-list';
import TodoSwiper from '../todo-swiper';
import Loader from '../../loader';
import { toastMessages } from '../../../consts';
import { ITodoUpdate } from '../../../types/todo.types';
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation
} from '../../../hooks/use-todo-mutations.hook';

import { useGetTodosQuery } from '../../../hooks/use-todo-queries.hook';

const TodoContainer = () => {
  const queryClient = useQueryClient();

  const { isPending, error, data } = useGetTodosQuery();
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

  if (isPending) {
    return <Loader />;
  }

  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <TodosTable
          todos={data}
          changeCompleteStatusHandler={changeCompleteStatusHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      </Box>

      <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
        <TodoSwiper
          todos={data}
          changeStatusHandler={changeCompleteStatusHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      </Box>

      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <TodosList
          todos={data}
          changeStatusHandler={changeCompleteStatusHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      </Box>
    </>
  );
};

export default TodoContainer;
