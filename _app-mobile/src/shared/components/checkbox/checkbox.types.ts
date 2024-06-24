import { Control } from 'react-hook-form';
import { DimensionValue, PressableProps } from 'react-native';

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
  label: string;
  description?: string;
  size?: TSize;
  colorValue?: TColor;
  radius?: TRadius;
  isDisabled?: boolean;
  line?: boolean;
  isChecked?: boolean;
  isError?: boolean;
  options?: TOptionsCheckbox[];
  value?: boolean;
  alignFlex?: TAlignFlex;
  errorMessage?: string;
  sizeWidth?: DimensionValue | undefined;
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
