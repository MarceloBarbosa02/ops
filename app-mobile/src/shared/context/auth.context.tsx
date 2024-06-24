import { ReactNode, createContext, useEffect } from 'react';

import { useSignInData } from '../hooks';

export const AuthContext = createContext({});

interface IProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: IProps) => {
  const { loadDataOff } = useSignInData();

  useEffect(() => {
    loadDataOff();
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
