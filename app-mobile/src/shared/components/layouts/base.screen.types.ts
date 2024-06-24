import { ReactNode } from 'react';
import { TColor } from '../button/button.types';

export type TabsLayoutProps = {
  children: ReactNode;
  title?: string;
  titleFooterRight?: string;
  description?: string;
  variant?: 'auth' | 'place' | 'default' | 'dash';
  isBackLeft?: boolean;
  isGradient?: boolean;
  isShowFooterBottom?: boolean;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  colorButtonFooterRight?: TColor;
  onNavigateLeft?(): void;
};
