import { useQuery } from '@tanstack/react-query';
import { APP_KEYS } from '../consts';
import todoService from '../../service/todo.service';
import { ITodoFilters } from '../types/todo.types';

export const useGetTodosQuery = (filters: ITodoFilters) =>
  useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS, filters],
    queryFn: () => todoService.getTodos(filters)
  });

export const useGetTodoQuery = (todoId: number) =>
  useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS, todoId],
    queryFn: () => todoService.getTodo(todoId)
  });
