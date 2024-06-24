import { ReactNode } from 'react';
import { Control } from 'react-hook-form';
import { PressableProps } from 'react-native';

type TColor =
  | 'default'
  | 'primary'
  | 'purple'
  | 'danger'
  | 'success'
  | 'warning';
type TRadius = 'none' | 'sm' | 'md' | 'lg' | 'xlg' | 'full';
type TSize = 'small' | 'medium' | 'large';
type TAlignFlex = 'row' | 'column';

export type TCheckboxProps = {
  label: ReactNode | string;
  size?: TSize;
  colorValue?: TColor;
  radius?: TRadius;
  errorMessage?: string;
  isDisabled?: boolean;
  line?: boolean;
  isChecked?: boolean;
  options?: TOptionsCheckbox[];
  value?: boolean;
  alignFlex?: TAlignFlex;
  onChangeValue?: (bool: boolean) => void;
} & PressableProps;

export type TCheckboxControlProps = {
  control: Control<any>;
  name: string;
} & TCheckboxProps;

export type TOptionsCheckbox = {
  title?: string;
  description?: string;
  value?: string;
  colorValue?: TColor;
};
