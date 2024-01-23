import React, { createContext, useState, ReactNode, useMemo } from 'react';

export interface AuthContextProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Implement your login logic here
    setLoggedIn(true);
  };

  const logout = () => {
    // Implement your logout logic here
    setLoggedIn(false);
  };

  const authContextValue = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout
    }),
    [isLoggedIn]
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
