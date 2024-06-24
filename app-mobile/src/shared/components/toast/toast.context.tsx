import { ReactNode, createContext } from 'react';
import { useToastStore } from './use-toast-store';
import ToastContainer from './toast.container';

export const ToastContext = createContext({});

interface IProps {
  children: ReactNode;
}

const ToastProvider = ({ children }: IProps) => {
  const { messages } = useToastStore((store) => {
    return {
      messages: store.messages,
    };
  });

  return (
    <ToastContext.Provider value={{}}>
      {children}
      {messages && <ToastContainer messages={messages} />}
    </ToastContext.Provider>
  );
};

export { ToastProvider };
