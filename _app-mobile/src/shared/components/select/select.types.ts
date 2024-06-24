import { Control } from 'react-hook-form';
import { TouchableOpacityProps } from 'react-native';

export type TSelectProps = {
  title?: string;
  name: string;
  label?: string;
  errorMessage?: string | null;
  defaultValue?: TSelectOptions;
  options: TSelectOptions[];
  control: Control<any>;
  isRequired?: boolean;
  sizeWidth?: number;
} & TouchableOpacityProps;

export type TSelectControlProps = {
  name: string;
  control: Control<any>;
} & TSelectProps;

export type TSelectOptions = {
  label: string;
  value: string;
  code?: string;
  flag?: string;
  mask?: string;
};

export type TSelectStyle = {
  isSelected: boolean;
  isErrored: boolean;
  isDisabled: boolean;
};
