import { useQuery } from '@tanstack/react-query';
import { APP_KEYS } from '../consts';
import todoService from '../../service/todo.service';
import { ITodoParams } from '../types/todo.types';

export const useGetTodosQuery = (params: ITodoParams) =>
  useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS, params],
    queryFn: () => todoService.getTodos(params)
  });

export const useGetTodoQuery = (todoId: number) =>
  useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS, todoId],
    queryFn: () => todoService.getTodo(todoId)
  });
