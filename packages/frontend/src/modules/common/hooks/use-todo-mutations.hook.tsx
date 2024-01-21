import { QueryClient, useMutation } from '@tanstack/react-query';
import { APP_KEYS } from '../consts';
import todoService from '../../service/todo.service';
import { ITodo, ITodoUpdate } from '../types/todo.types';

export const useCreateTodoMutation = (queryClient: QueryClient) =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.TODOS],
    mutationFn: (body: ITodo) => todoService.createTodo(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.TODOS] });
    }
  });

export const useUpdateTodoMutation = (queryClient: QueryClient) =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.TODOS],
    mutationFn: (body: ITodoUpdate) => todoService.updateTodo(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.TODOS] });
    }
  });

export const useDeleteTodoMutation = (queryClient: QueryClient) =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.TODOS],
    mutationFn: (id: number) => todoService.deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.TODOS] });
    }
  });
