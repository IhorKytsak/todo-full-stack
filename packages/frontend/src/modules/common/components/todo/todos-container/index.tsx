import { Box } from '@mui/material';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import TodosTable from '../todos-table';
import TodosList from '../todos-list';
import TodoSwiper from '../todo-swiper';
import Loader from '../../loader';
import { APP_KEYS, toastMassages } from '../../../consts';
import todoService from '../../../../service/todo.service';
import { ITodoUpdate } from '../../../types/todo.types';
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation
} from '../../../hooks/use-todo-mutations.hook';

const TodoContainer = () => {
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS],
    queryFn: () => todoService.getTodos()
  });

  const { mutate: deleteTodoMutation } = useDeleteTodoMutation(queryClient);
  const { mutate: updateTodoMutation } = useUpdateTodoMutation(queryClient);

  const deleteTodoHandler = (id: number) => {
    deleteTodoMutation(id, {
      onSuccess: () => {
        toast.success(toastMassages.TODO_DELETE_SUCCESS);
      },
      onError: () => {
        toast.error(toastMassages.TODO_DELETE_ERROR);
      }
    });
  };

  const changeCompleteStatusHandler = ({ id, isCompleted }: ITodoUpdate) => {
    updateTodoMutation(
      { id, isCompleted },
      {
        onSuccess: () => {
          toast.success(toastMassages.TODO_UPDATE_COMPLETE_STATUS_SUCCESS);
        },
        onError: () => {
          toast.error(toastMassages.TODO_UPDATE_COMPLETE_STATUS_ERROR);
        }
      }
    );
  };

  if (error) {
    toast.error(toastMassages.TODO_GET_ERROR);
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
