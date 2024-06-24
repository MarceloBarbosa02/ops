import { ReactNode, Ref, RefObject } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Control } from 'react-hook-form';
// import { BottomSheetModal } from '@gorhom/bottom-sheet';
import {
  TextInputMask,
  TextInputMaskOptionProp,
} from 'react-native-masked-text';

type TVariant = 'default' | 'focused' | 'error' | 'disabled' | 'full';

type TLabelPlacement = 'higher' | 'inLabel' | 'outLabel' | 'phone';

type TColor = 'empty' | 'full' | 'primary' | 'disabled' | 'danger';

export type TInputProps = {
  textRef?: Ref<TextInput>;
  textRefMask?: Ref<TextInputMask>;
  label?: string;
  errorMessage?: string;
  description?: string;
  variant?: TVariant;
  labelPlacement?: TLabelPlacement;
  color?: TColor;
  startContent?: ReactNode;
  endContent?: ReactNode;
  fullWidth?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
  isLoading?: boolean;
  isMultiline?: boolean;
  isRequired?: boolean;
  isErrorMessage?: boolean;
  isMask?: boolean;
  maskCustom?: string;
  type?: string;
  // refModalInputPhone?: RefObject<BottomSheetModal>;
  options?: TextInputMaskOptionProp;
} & TextInputProps;

export type TInputControlProps = {
  control: Control<any>;
  name: string;
} & TInputProps;

export type TSelectOptions = {
  label: string;
  value: string;
  code?: string;
  flag?: string;
  mask?: string;
};

export type TInputPhoneContext = {
  optionCountry: TSelectOptions;
  handleSelectOptionCountry: (item: TSelectOptions) => void;
};
