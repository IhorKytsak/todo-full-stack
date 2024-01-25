import { useMutation, QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import {
  IUser,
  IUserChangePass,
  IUserRecoverPass,
  IUserRecoverPassConfirmed,
  IUserRegisterLogin
} from '../types/user.types';
import authService from '../../service/auth.service';
import { APP_KEYS, toastMessages } from '../consts';

interface LoginMutationArgs {
  queryClient: QueryClient;
  loginHandler: (value: boolean) => void;
  userHandler: (user: IUser) => void;
}

export const useRegisterMutation = (queryClient: QueryClient) => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.AUTH],
    mutationFn: (body: IUserRegisterLogin) => authService.registerUser(body),
    onSuccess: () => {
      toast.success(toastMessages.USER_REGISTER_SUCCESS);
      navigate(APP_KEYS.ROUTER_KEYS.SIGN_IN);
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.AUTH] });
    },
    onError: () => {
      toast.error(toastMessages.USER_REGISTER_ERROR);
    }
  });
};

export const useLoginMutation = ({ queryClient, loginHandler, userHandler }: LoginMutationArgs) =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.AUTH],
    mutationFn: (body: IUserRegisterLogin) => authService.loginUser(body),
    onSuccess: (data: IUser) => {
      loginHandler(true);
      userHandler(data);
      toast.success(toastMessages.USER_LOGIN_SUCCESS);
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.AUTH] });
    },
    onError: () => {
      toast.error(toastMessages.USER_LOGIN_ERROR);
    }
  });

export const useRecoveryPasswordMutation = (queryClient: QueryClient) =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.AUTH],
    mutationFn: (body: IUserRecoverPass) => authService.recoverPassword(body),
    onSuccess: () => {
      toast.success(toastMessages.PASSWORD_RECOVER_SUCCESS, {
        autoClose: 8000
      });
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.AUTH] });
    },
    onError: () => {
      toast.error(toastMessages.PASSWORD_RECOVER_ERROR);
    }
  });

export const useRecoveryPassConfirmedMutation = (queryClient: QueryClient) => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.AUTH],
    mutationFn: (body: IUserRecoverPassConfirmed) => authService.recoverPasswordConfirmed(body),
    onSuccess: () => {
      toast.success(toastMessages.PASS_RECOVER_CONFIRMED_SUCCESS);
      navigate(APP_KEYS.ROUTER_KEYS.SIGN_IN, { replace: true });
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.AUTH] });
    },
    onError: () => {
      toast.error(toastMessages.PASS_RECOVER_CONFIRMED_ERROR);
    }
  });
};

export const useChangePasswordMutation = (queryClient: QueryClient, successHandler: () => void) =>
  useMutation({
    mutationKey: [APP_KEYS.QUERY_KEYS.AUTH],
    mutationFn: (body: IUserChangePass) => authService.changePassword(body),
    onSuccess: () => {
      toast.success(toastMessages.PASS_CHANGE_SUCCESS, {
        autoClose: 8000
      });
      successHandler();
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.AUTH] });
    },
    onError: () => {
      toast.error(toastMessages.PASS_CHANGE_ERROR);
    }
  });
