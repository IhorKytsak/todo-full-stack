import React, { createContext, useState, ReactNode, useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { useLoginMutation } from '../common/hooks/use-auth-mutatiuns.hook';
import { IUserRegisterLogin, IUser } from '../common/types/user.types';
import { APP_KEYS } from '../common/consts';
import { checkToken, getItem, removeItem } from '../utils/localStorage.util.';

export interface AuthContextProps {
  isLoggedIn: boolean;
  login: (credentials: IUserRegisterLogin) => void;
  logout: () => void;
  isError: boolean;
  isPending: boolean;
  user: IUser | null;
}
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const queryClient = useQueryClient();

  const [isLoggedIn, setLoggedIn] = useState(() => checkToken());
  const [user, setUser] = useState<null | IUser>(() => getItem(APP_KEYS.STORAGE_KEYS.USER));

  const { mutate, isPending, isError } = useLoginMutation({
    queryClient,
    loginHandler: setLoggedIn,
    userHandler: setUser
  });

  const login = (credentials: IUserRegisterLogin) => {
    mutate(credentials);
  };

  const logout = () => {
    removeItem(APP_KEYS.STORAGE_KEYS.TOKEN);
    removeItem(APP_KEYS.STORAGE_KEYS.USER);

    setUser(null);
    setLoggedIn(false);
  };

  const authContextValue = useMemo(
    () => ({
      isLoggedIn,
      isError,
      isPending,
      user,
      login,
      logout
    }),
    [isLoggedIn, isPending, isError, user]
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
