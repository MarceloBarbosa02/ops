import { ReactNode } from 'react';

export type TComponentLayout = {
  children: ReactNode;
  isDisabled?: boolean;
  isRespondLater?: boolean;
  isConcluded?: boolean;
  onNavigationBack: () => void;
  onNavigationContinue: () => void;
};

export type TProgressBar = {
  step: string;
  stepMax: string;
  progress: number;
};
