import { ToastProvider } from '../components/toast/toast.context';
import { AuthProvider } from './auth.context';
import { AppContextProps } from './context.types';
import { ModalsProvider } from './modals.context';
import { UpdateProvider } from './update.context';

export const AppProvider = ({ children }: AppContextProps) => {
  return (
    <AuthProvider>
      <ToastProvider>
        <UpdateProvider>
          <ModalsProvider>{children}</ModalsProvider>
        </UpdateProvider>
      </ToastProvider>
    </AuthProvider>
  );
};
