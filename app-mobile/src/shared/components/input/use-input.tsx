import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { TInputProps, TSelectOptions } from './input.types';
import {
  styledInput,
  styledLabel,
  styledWrapperInput,
  styledWrapperLabel,
} from './input.styles';
import { colors } from '@/shared/theme';

import { useInputPhoneStore } from './use-input-phone.store';
// import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { ddi_phone } from './phone.ddi';

export const useInput = (props: TInputProps) => {
  // const refActionSheet = useRef<BottomSheetModal>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoadingPhone, setIsLoadingPhone] = useState(false);
  const {
    type,
    label,
    textRef,
    options,
    // refModalInputPhone,
    textRefMask,
    variant: variantProp = 'default',
    labelPlacement = 'higher',
    color = 'default',
    fullWidth = false,
    isClearable = false,
    isDisabled = false,
    isMultiline = false,
    isErrorMessage = false,
    isMask = false,
    isLoading = false,
    errorMessage,
    startContent,
    className,
    isRequired,
    endContent: endContentProp,
    maskCustom,
    ...rest
  } = props;
  // const form = useWatch();

  const shouldLabelBeOutside = ['higher', undefined].includes(labelPlacement);
  const shouldLabelBeInside = ['inLabel', 'outLabel', undefined].includes(
    labelPlacement
  );
  const isFilled = !!rest.value;
  const hasPlaceholder = !!rest.placeholder;
  // const variant = isFocused ? 'focused' : errorMessage ? 'error' : variantProp;

  const { optionCountry, handleSelectOptionCountry } = useInputPhoneStore(
    (store) => {
      return {
        optionCountry: store.optionCountry,
        handleSelectOptionCountry: store.handleSelectOptionCountry,
      };
    }
  );

  const handlePasswordVisibilityChange = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleIsOpen = () => {
    setIsLoadingPhone(true);
    // refActionSheet.current?.present();
    setTimeout(() => {
      setIsLoadingPhone(false);
    }, 100);
  };

  const handleSelectOption = (item: TSelectOptions) => {
    handleSelectOptionCountry(item);
    // refActionSheet.current?.dismiss();
  };

  useEffect(() => {
    if (rest.secureTextEntry) {
      handlePasswordVisibilityChange();
    }
  }, [rest.secureTextEntry]);

  useEffect(() => {
    if (labelPlacement === 'phone') {
      handleSelectOptionCountry(ddi_phone[29]);
    }
  }, [labelPlacement]);

  const variant = useMemo(() => {
    if (isFocused) {
      return 'focused';
    }
    if (errorMessage) {
      return 'error';
    }
    if (isFilled) {
      return 'full';
    }
    return variantProp;
  }, [isFocused, errorMessage, isFilled, variantProp]);

  const isLabelInlineFocused = useMemo(() => {
    return shouldLabelBeOutside && isFocused && !shouldLabelBeInside;
  }, [shouldLabelBeOutside, isFocused, shouldLabelBeInside]);

  const endContent = useMemo(() => {
    if (rest.secureTextEntry) {
      return (
        <TouchableOpacity onPress={handlePasswordVisibilityChange}>
          {isPasswordVisible ? (
            <Feather name="eye-off" size={18} color={colors.gray[400]} />
          ) : (
            <Feather name="eye" size={18} color={colors.gray[400]} />
          )}
        </TouchableOpacity>
      );
    }

    return endContentProp;
  }, [isPasswordVisible, rest.secureTextEntry, variant, endContentProp]);

  const stylesInput = useMemo(
    () =>
      styledInput({
        className,
        variant,
      }),
    [className, variant]
  );

  const stylesWrapperInput = useMemo(
    () =>
      styledWrapperInput({
        variant,
        labelPlacement,
      }),
    [variant, labelPlacement]
  );

  const stylesWrapperLabel = useMemo(
    () =>
      styledWrapperLabel({
        labelPlacement,
      }),
    [labelPlacement]
  );

  const stylesLabel = useMemo(
    () =>
      styledLabel({
        variant,
        labelPlacement,
      }),
    [variant, labelPlacement]
  );

  return {
    type,
    label,
    isMask,
    options,
    textRef,
    variant,
    isFocused,
    isLoading,
    endContent,
    maskCustom,
    isRequired,
    stylesInput,
    stylesLabel,
    startContent,
    errorMessage,
    labelPlacement,
    isLoadingPhone,
    // refActionSheet,
    textRefMask,
    optionCountry,
    hasPlaceholder,
    isErrorMessage,
    isPasswordVisible,
    stylesWrapperInput,
    stylesWrapperLabel,
    // refModalInputPhone,
    shouldLabelBeInside,
    isLabelInlineFocused,
    handleIsOpen,
    handleInputBlur,
    handleInputFocus,
    handleSelectOption,
    handlePasswordVisibilityChange,
    ...rest,
  };
};
