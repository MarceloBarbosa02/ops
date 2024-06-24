import { useColorScheme } from 'nativewind';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { TInputProps } from './input.types';
import { useInput } from './use-input';
import { colors } from '@/shared/theme';
import React, { useMemo } from 'react';
import { Typography } from '../typography';
// import { CheckInputIcon, ErrorIcon } from '@/shared/assets/components/generics';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import {
  TextInputMask,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';
// import { ActionSheet } from '../action-sheet';
import { ddi_phone } from './phone.ddi';
import { mergeRefs } from '@/shared/utils';
import {
  CheckInputIcon,
  ErrorInputIcon,
} from '@/shared/assets/components/generics';

const Input = (props: TInputProps, ref: any) => {
  const { colorScheme } = useColorScheme();
  const {
    type,
    label,
    isMask,
    options,
    textRef,
    variant,
    isFocused,
    isLoading,
    maskCustom,
    isRequired,
    endContent,
    stylesLabel,
    stylesInput,
    description,
    errorMessage,
    textRefMask,
    startContent,
    optionCountry,
    isLoadingPhone,
    // refActionSheet,
    labelPlacement,
    isErrorMessage,
    hasPlaceholder,
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
    ...rest
  } = useInput({ ...props });

  const inputCommon = useMemo(() => {
    return (
      <TextInput
        {...rest}
        ref={mergeRefs([ref, textRef])}
        className="flex-auto text-gray-900 font-Satoshi-Regular text-sm"
        maxFontSizeMultiplier={1.1}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoCorrect={false}
        textContentType="oneTimeCode"
        placeholder={hasPlaceholder ? rest.placeholder : label}
        placeholderTextColor={
          colorScheme === 'dark' ? colors.gray[400] : colors.gray[600]
        }
        autoCapitalize={rest.autoCapitalize ?? 'none'}
        secureTextEntry={rest.secureTextEntry ? isPasswordVisible : false}
      />
    );
  }, [
    rest,
    label,
    textRef,
    hasPlaceholder,
    isPasswordVisible,
    rest.autoCapitalize,
    rest.secureTextEntry,
  ]);

  const inputMask = useMemo(() => {
    return (
      <TextInputMask
        {...rest}
        className="flex-auto text-gray-900 font-Satoshi-Regular text-sm"
        ref={mergeRefs([ref, textRefMask])}
        style={{
          flex: 1,
          color: colorScheme === 'dark' ? colors.gray[200] : colors.gray[800],
        }}
        textContentType="oneTimeCode"
        maxFontSizeMultiplier={1.1}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type={type as TextInputMaskTypeProp}
        options={options as TextInputMaskOptionProp}
        autoCorrect={false}
      />
    );
  }, [maskCustom, textRefMask, rest]);

  const labelContent = useMemo(() => {
    return (
      label && (
        <View className={stylesWrapperLabel}>
          <Text className={stylesLabel}>{label}</Text>
        </View>
      )
    );
  }, [label, stylesLabel, stylesWrapperLabel]);

  const inputWrapper = useMemo(() => {
    if (startContent || endContent) {
      return (
        <View className={stylesWrapperInput}>
          {startContent && (
            <View className="w-auto h-auto items-center justify-center">
              {startContent}
            </View>
          )}

          {isMask ? inputMask : inputCommon}
          {variant === 'full' && (
            <View className="h-auto items-center justify-center mr-1">
              <CheckInputIcon />
            </View>
          )}
          {isLoading && (
            <ActivityIndicator size="small" color={colors.blue[600]} />
          )}
          {endContent && (
            <View className="w-auto h-auto items-center justify-center">
              {endContent}
            </View>
          )}
        </View>
      );
    }

    return (
      <View className={stylesWrapperInput}>
        {isMask ? inputMask : inputCommon}
        {isLoading && (
          <ActivityIndicator size="small" color={colors.blue[600]} />
        )}
        {variant === 'full' && (
          <View className="h-auto items-center justify-center mr-1">
            <CheckInputIcon />
          </View>
        )}
      </View>
    );
  }, [startContent, variant, endContent, inputCommon, stylesWrapperInput]);

  const helperWrapper = useMemo(() => {
    return (
      <>
        {errorMessage && !isErrorMessage && (
          <View className="flex-row items-center gap-1 mt-1 ml-[2px]">
            <ErrorInputIcon />
            <Typography
              title={errorMessage}
              variant="caption"
              size="small"
              color="danger"
            />
          </View>
        )}
        {description && (
          <Typography
            title={description}
            variant="caption"
            size="medium"
            color="neutral-medium"
          />
        )}
      </>
    );
  }, [errorMessage, description]);

  const mainWrapper = useMemo(() => {
    if (labelPlacement === 'phone') {
      return (
        <View className="w-full">
          <View className={stylesWrapperInput}>
            <View className="flex-row items-center gap-1">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleIsOpen}
                className="flex-row items-center">
                {isLoadingPhone ? (
                  <ActivityIndicator />
                ) : (
                  <Typography title={`${optionCountry.flag ?? ''}`} />
                )}
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={20}
                  color={colors.gray[600]}
                />
              </TouchableOpacity>
              <Typography title={`+${optionCountry.value}`} size="small" />
            </View>
            <View className="flex-1 ml-4">{inputMask}</View>
          </View>
          {helperWrapper}
        </View>
      );
    }

    if (labelContent) {
      return (
        <View>
          <View>
            {isLabelInlineFocused && labelContent}
            {shouldLabelBeInside && labelContent}
            {inputWrapper}
          </View>
          {helperWrapper}
        </View>
      );
    }

    return (
      <View>
        <View>{inputWrapper}</View>
        {helperWrapper}
      </View>
    );
  }, [
    inputMask,
    isFocused,
    inputCommon,
    labelContent,
    inputWrapper,
    helperWrapper,
    shouldLabelBeInside,
  ]);

  return (
    <View>
      {mainWrapper}
      {/* <ActionSheet
        bottomSheetRef={refActionSheet}
        title="Selecione o DDI"
        indexOpen={3}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 8,
          }}>
          <View className="flex-1">
            {ddi_phone.map((item) => (
              <TouchableOpacity
                key={item?.code}
                onPress={() => handleSelectOption(item)}
                className="flex-row items-center py-2 px-4 gap-1">
                <Typography title={`${item.flag}`} />
                <Typography
                  title={item.label}
                  weight={
                    item.value === optionCountry.value ? 'bold' : 'regular'
                  }
                />
                {item.value === optionCountry.value && (
                  <AntDesign name="check" size={16} color={colors.green[600]} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ActionSheet> */}
    </View>
  );
};

export default Input;
