import { ReactNode } from 'react';

export type AppContextProps = {
  children: ReactNode;
  contentModal?: ReactNode;
};

export type CheckVersionResponse = {
  local: string;
  remote: string;
  result: 'new' | 'old' | 'equal';
  detail: 'remote > local' | 'remote < local' | 'remote === local';
};
