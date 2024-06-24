import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { TInputProps } from './input.types';

export const Wrapper = styled.View<Omit<TInputProps, 'control'>>`
  width: auto;
  gap: 2px;
  padding: 0 0 16px;

  ${({ isErrorMessage }) =>
    isErrorMessage &&
    css`
      padding: 0;
    `};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.4;
    `};

  ${({ sizeWidth }) =>
    typeof sizeWidth === 'number'
      ? css`
          width: ${sizeWidth}%;
        `
      : css`
          width: auto;
        `};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.gray[400]};
`;
export const Container = styled.View<Omit<TInputProps, 'control'>>`
  width: 100%;
  min-height: ${RFPercentage(7)}px;
  border: 1px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 8px ${RFPercentage(1.5)}px;
  border-color: ${({ theme }) => theme.gray[300]};
  background-color: ${({ theme }) => theme.gray[50]};

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      background-color: ${theme.gray[100]};
    `};

  ${({ variant, theme }) =>
    variant === 'error' &&
    css`
      background-color: ${theme.red[50]};
      border-color: ${theme.red[600]};
    `};

  ${({ variant, theme }) =>
    variant === 'focused' &&
    css`
      border-color: ${theme.blue[600]};
      background-color: ${theme.blue[50]};
    `};
`;
export const WrapperInput = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const Input = styled(TextInput)`
  flex: auto;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  /* border: 1px; */
  color: ${({ theme }) => theme.gray[800]};
`;
export const IconContainer = styled.View`
  width: auto;
  align-items: center;
  justify-content: center;
`;
export const BtnIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const MaskTextInput = styled(TextInputMask)<{ error?: boolean }>`
  flex: auto;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[800]};
`;

export const WrapperIsRequired = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

export const WrapperIsError = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 4px;
`;
