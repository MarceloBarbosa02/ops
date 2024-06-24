import { Control } from 'react-hook-form';
import { TouchableOpacityProps } from 'react-native';

export type TSelectProps = {
  title?: string;
  label: string;
  type?: 'phone' | 'select';
  errorMessage?: string | null;
  selectedValue?: any;
  defaultValue?: TSelectOptions;
  options: TSelectOptions[];
  onValueChange?: (item: string) => void;
} & TouchableOpacityProps;

export type TSelectControlProps = {
  name: string;
  control: Control<any>;
} & TSelectProps;

export type TSelectOptions = {
  label: string;
  value: string;
};
