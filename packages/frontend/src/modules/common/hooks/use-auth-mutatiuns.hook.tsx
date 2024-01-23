import { useMutation, QueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { IUserRegisterLogin } from '../types/user.types';
import authService from '../../service/auth.service';
import { APP_KEYS, toastMessages } from '../consts';

export const useRegisterMutation = (queryClient: QueryClient) =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.AUTH],
    mutationFn: (body: IUserRegisterLogin) => authService.registerUser(body),
    onSuccess: () => {
      toast.success(toastMessages.USER_REGISTER_SUCCESS);
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.AUTH] });
    },
    onError: () => {
      toast.error(toastMessages.USER_REGISTER_ERROR);
    },
    onSettled: () => {}
  });

export const useLoginMutation = (queryClient: QueryClient) =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.AUTH],
    mutationFn: (body: IUserRegisterLogin) => authService.loginUser(body),
    onSuccess: () => {
      toast.success(toastMessages.USER_LOGIN_SUCCESS);
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.AUTH] });
    },
    onError: () => {
      toast.error(toastMessages.USER_LOGIN_ERROR);
    },
    onSettled: () => {}
  });
