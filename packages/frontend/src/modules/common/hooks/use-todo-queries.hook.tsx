import { useQuery } from '@tanstack/react-query';
import { APP_KEYS } from '../consts';
import todoService from '../../service/todo.service';

export const useGetTodosQuery = () =>
  useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS],
    queryFn: () => todoService.getTodos()
  });

export const useGetTodoQuery = (todoId: number) =>
  useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS, todoId],
    queryFn: () => todoService.getTodo(todoId)
  });
