import { ReactNode, Ref } from 'react';
import { Control } from 'react-hook-form';
import { DimensionValue, TextInput, TextInputProps } from 'react-native';
import {
  TextInputMaskMethods,
  TextInputMaskOptionProp,
} from 'react-native-masked-text';
import { TSelectOptions } from '../select/select.types';

type TVariant = 'default' | 'focused' | 'error' | 'disabled' | 'filled';

type TLabelPlacement = 'higher' | 'inside' | 'filled' | 'fat';

type TColor = 'default' | 'primary' | 'disabled' | 'danger';

export type TInputProps = {
  textRef?: Ref<TextInput>;
  label?: string;
  errorMessage?: string;
  description?: string;
  variant?: TVariant;
  labelPlacement?: TLabelPlacement;
  color?: TColor;
  startContent?: ReactNode;
  endContent?: ReactNode;
  fullWidth?: boolean;
  isMask?: boolean;
  isRequired?: boolean;
  isClearable?: boolean;
  isFocused?: boolean;
  isFilled?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isFocusedOut?: boolean;
  isMultiline?: boolean;
  isErrorMessage?: boolean;
  isPasswordVisible?: boolean;
  isRemoveSpecialCharacters?: boolean;
  mask?: boolean;
  textRefMask?: Ref<TextInputMaskMethods>;
  options?: TextInputMaskOptionProp;
  type?: string;
  onValueChange?: (value: string) => void;
  onFocusedCEP?: () => void;
  onBlurCEP?: () => void;
  control: Control<any>;
  name?: string;
  sizeWidth?: DimensionValue | undefined;
} & TextInputProps;

export type TInputPhoneContext = {
  optionCountry: TSelectOptions;
  handleSelectOptionCountry: (item: TSelectOptions) => void;
};
