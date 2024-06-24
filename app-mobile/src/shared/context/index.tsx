import { ToastProvider } from '../components/toast/toast.context';
import { AuthProvider } from './auth.context';
import { AppContextProps } from './context.types';

export const AppProvider = ({ children }: AppContextProps) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};
