import { Controller } from 'react-hook-form';
import { ActivityIndicator, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import { TInputProps } from './input.types';
import { Typography } from '../typography';

import * as S from './input.styles';

const InputCEP = ({
  control,
  name = '',
  label = '',
  type,
  textRefMask,
  options,
  errorMessage,
  isFocusedOut,
  isLoading,
  onFocusedCEP,
  onBlurCEP,
  ...rest
}: TInputProps) => {
  const theme = useTheme();
  const variant = isFocusedOut ? 'focused' : errorMessage ? 'error' : 'default';

  return (
    <S.Wrapper {...rest}>
      <S.WrapperIsRequired>
        <Typography title={label} variant="subtitle" size="large" />
        <Typography
          title="(obrigatório)"
          variant="subtitle"
          size="medium"
          colorValue="neutral-light"
        />
      </S.WrapperIsRequired>
      <S.Container
        variant={variant}
        style={{
          minHeight: RFPercentage(7),
        }}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <S.MaskTextInput
              {...rest}
              autoCorrect={false}
              maxFontSizeMultiplier={1.1}
              textContentType="oneTimeCode"
              maxLength={9}
              type="zip-code"
              options={{
                mask: '99999-999',
              }}
              onFocus={onFocusedCEP}
              onBlur={onBlurCEP}
              placeholderTextColor={theme.gray[500]}
              value={value}
              onChangeText={onChange}
              autoCapitalize={rest.autoCapitalize ?? 'none'}
            />
          )}
        />
        {isLoading && (
          <ActivityIndicator size={'small'} color={theme.gray[400]} />
        )}
      </S.Container>
      {errorMessage && (
        <View
          style={{
            gap: 4,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 16,
          }}>
          <Typography
            title={errorMessage}
            variant="subtitle"
            size="small"
            colorValue="danger"
          />
        </View>
      )}
    </S.Wrapper>
  );
};

export default InputCEP;
