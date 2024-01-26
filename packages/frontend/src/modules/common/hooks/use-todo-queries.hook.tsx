import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { APP_KEYS } from '../consts';
import todoService from '../../service/todo.service';
import { ITodoParams } from '../types/todo.types';

export const useGetTodosQuery = (params: ITodoParams) =>
  useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS, params],
    queryFn: () => todoService.getTodos(params)
  });

export const useGetTodosInfiniteQuery = (params: ITodoParams) =>
  useInfiniteQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS, params],
    queryFn: ({ pageParam = 1 }) => todoService.getTodos({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: ({ page, totalPages }) => {
      const nextPage = page + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    }
  });

export const useGetTodoQuery = (todoId: number) =>
  useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS, todoId],
    queryFn: () => todoService.getTodo(todoId)
  });
