import { TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { TInputProps } from "./input.types";

export const Wrapper = styled.View<Omit<TInputProps, "control">>`
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
    typeof sizeWidth === "number"
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
  color: ${({ theme }) => theme.colors.green_l400_d500};
`;
export const Container = styled.View<Omit<TInputProps, "control">>`
  width: 100%;
  border: 1px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  padding: 16px 14px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
  background-color: ${({ theme }) => theme.colors.gray_l50_d900};

  ${({ labelPlacement }) =>
    labelPlacement === "higher" &&
    css`
      padding: 16px 12px;
    `};

  ${({ labelPlacement }) =>
    labelPlacement === "filled" &&
    css`
      padding: 14px 12px;
    `};

  ${({ labelPlacement }) =>
    labelPlacement === "inside" &&
    css`
      padding: 8px 12px;
    `};

  ${({ isFilled, labelPlacement }) =>
    isFilled &&
    labelPlacement === "filled" &&
    css`
      padding: 14px 12px;
    `};

  ${({ isFilled, labelPlacement }) =>
    isFilled &&
    labelPlacement !== "filled" &&
    css`
      padding: 6px 14px;
    `};

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      background-color: ${theme.colors.gray_l100_d800};
    `};

  ${({ variant, theme }) =>
    variant === "error" &&
    css`
      background-color: ${theme.colors.red_l50_d900};
      border-color: ${theme.colors.red_l600_d300};
    `};

  ${({ variant, theme }) =>
    variant === "focused" &&
    css`
      border-color: ${theme.colors.blue_l600_d300};
      background-color: ${theme.colors.blue_l50_d900};
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
  color: ${({ theme }) => theme.colors.gray_l800_d100};
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
  color: ${({ theme }) => theme.colors.gray_l800_d100};
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

export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l600_d300};
`;
export const LabelRequired = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.fonts.sizes.smallS}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l400_d500};
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l800_d100};
`;
export const Error = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.red_l600_d300};
`;
