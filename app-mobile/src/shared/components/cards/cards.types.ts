import { Control } from 'react-hook-form';

export type TCardsProps = {
  title: string;
  children: React.ReactNode;
};

export type THeaderSearchProps = {
  quantity?: number;
  variant?: 'primary' | 'secondary';
  name?: string;
  control?: Control;
};
