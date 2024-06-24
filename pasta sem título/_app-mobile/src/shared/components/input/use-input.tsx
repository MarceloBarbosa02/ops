import { Feather } from "@expo/vector-icons";
import { useCallback, useMemo, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useWatch } from "react-hook-form";
import { useTheme } from "styled-components/native";

import { TInputProps } from "./input.types";

export const useInput = (props: TInputProps) => {
  const theme = useTheme();
  const {
    label = "",
    mask,
    textRef,
    control,
    name = "",
    options,
    type,
    isLoading = false,
    textRefMask,
    variant: variantProp = "default",
    labelPlacement = "higher",
    color = "default",
    fullWidth = false,
    isClearable = false,
    isDisabled = false,
    isMultiline = false,
    isMask = false,
    isErrorMessage = false,
    isRemoveSpecialCharacters = true,
    errorMessage,
    startContent,
    isRequired,
    onValueChange = () => {},
    endContent: endContentProp,
    sizeWidth = 100,
    ...rest
  } = props;
  const form = useWatch();

  const isFilled = !!form[name];

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [isFocused, setIsFocused] = useState(false);

  const shouldLabelBeOutside = ["higher", undefined].includes(labelPlacement);
  const shouldLabelBeInside = ["inside", "filled", undefined].includes(
    labelPlacement
  );
  const hasPlaceholder = !!rest.placeholder;
  const isLabelOutside = (shouldLabelBeOutside && isFilled) || hasPlaceholder;
  const isLabelOutsideAsPlaceholder =
    hasPlaceholder || (shouldLabelBeInside && isFilled);

  const variant = isFocused ? "focused" : errorMessage ? "error" : variantProp;

  const handlePasswordVisibilityChange = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const endContent = useMemo(() => {
    if (rest.secureTextEntry) {
      return (
        <TouchableOpacity onPress={handlePasswordVisibilityChange}>
          {isPasswordVisible ? (
            <Feather
              name="eye-off"
              size={18}
              color={theme.colors.gray_l400_d500}
            />
          ) : (
            <Feather name="eye" size={18} color={theme.colors.gray_l400_d500} />
          )}
        </TouchableOpacity>
      );
    }
    return endContentProp;
  }, [isPasswordVisible, rest.secureTextEntry, endContentProp]);

  return {
    name,
    mask,
    type,
    label,
    isMask,
    textRef,
    options,
    variant,
    control,
    isFocused,
    isLoading,
    isRequired,
    endContent,
    sizeWidth,
    isDisabled,
    textRefMask,
    errorMessage,
    startContent,
    hasPlaceholder,
    labelPlacement,
    isLabelOutside,
    isErrorMessage,
    isPasswordVisible,
    isRemoveSpecialCharacters,
    // shouldLabelOutside,
    shouldLabelBeInside,
    shouldLabelBeOutside,
    isLabelOutsideAsPlaceholder,
    handleInputBlur,
    handleInputFocus,
    handlePasswordVisibilityChange,
    ...rest,
  };
};
