import { Control } from 'react-hook-form';
import { DimensionValue, PressableProps } from 'react-native';

type TColor =
  | 'default'
  | 'primary'
  | 'purple'
  | 'danger'
  | 'success'
  | 'warning';
type TSize = 'small' | 'medium' | 'large';
type TAlignFlex = 'row' | 'column';

export type TOptionsRadio = {
  title?: string;
  description?: string;
  value?: string;
  colorValue?: TColor;
};

export type TRadioProps = {
  title?: string;
  description?: string;
  colorValue?: TColor;
  size?: TSize;
  select?: boolean;
  options?: TOptionsRadio[];
  alignFlex?: TAlignFlex;
  sizeWidth?: DimensionValue | undefined;
} & PressableProps;

export type TRadioControlProps = {
  control: Control;
  name: string;
} & TRadioProps;
