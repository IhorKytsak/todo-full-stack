import { QueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import todoService from '../../service/todo.service';
import { ITodo, ITodoUpdate } from '../types/todo.types';
import { toastMassages, APP_KEYS } from '../consts';

type Handler = () => void;

export const useCreateTodoMutation = (queryClient: QueryClient, settledHandler?: Handler) =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.TODOS],
    mutationFn: (body: ITodo) => todoService.createTodo(body),
    onSuccess: () => {
      toast.success(toastMassages.TODO_ADD_SUCCESS);
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.TODOS] });
    },
    onError: () => {
      toast.error(toastMassages.TODO_ADD_ERROR);
    },
    onSettled: () => {
      if (settledHandler) {
        settledHandler();
      }
    }
  });

export const useUpdateTodoMutation = (queryClient: QueryClient, settledHandler?: Handler) =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.TODOS],
    mutationFn: (body: ITodoUpdate) => todoService.updateTodo(body),
    onSuccess: () => {
      toast.success(toastMassages.TODO_UPDATE_SUCCESS);
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.TODOS] });
    },
    onError: () => {
      toast.success(toastMassages.TODO_UPDATE_ERROR);
    },
    onSettled: () => {
      if (settledHandler) {
        settledHandler();
      }
    }
  });

export const useDeleteTodoMutation = (queryClient: QueryClient) =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.TODOS],
    mutationFn: (id: number) => todoService.deleteTodo(id),
    onSuccess: () => {
      toast.success(toastMassages.TODO_DELETE_SUCCESS);
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.TODOS] });
    },
    onError: () => {
      toast.error(toastMassages.TODO_DELETE_ERROR);
    }
  });
