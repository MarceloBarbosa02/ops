import { ReactNode } from "react";
import { StateProvider } from "./StateContext";
import { AlertProvider } from "./AlertContext";

interface AppContextProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppContextProps) => {
  return (
    <StateProvider>
      <AlertProvider>{children}</AlertProvider>
    </StateProvider>
  );
};
