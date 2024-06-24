import { Control } from 'react-hook-form';
import { PressableProps } from 'react-native';

export type TSwitchProps = {
  title: string;
  variant?: 'default' | 'primary';
  size?: 'lg' | 'md' | 'sm';
  spinner?: JSX.Element;
  active?: boolean;
  isLoading?: boolean;
  defaultValue?: boolean;
  onValueChange?: (bool: boolean) => void;
} & PressableProps;

export type TSwitchControlProps = {
  name: string;
  control: Control<any>;
} & TSwitchProps;
