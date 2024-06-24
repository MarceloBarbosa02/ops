import { TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
  isErrored?: boolean;
  isFocused?: boolean;
  property?: "Filled" | "Outline" | "Higher" | "-";
}

export const Wrapper = styled.View`
  flex: 1;
  padding: 16px 0;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_80};
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<Props>`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  margin-bottom: 4px;

  ${({ isErrored }) =>
    isErrored &&
    css`
      color: ${({ theme }) => theme.colors.color_red_40};
    `};

  ${({ property }) =>
    property === "Filled" &&
    css`
      background-color: ${({ theme }) => theme.colors.color_neutral_0};
    `};

  ${({ property }) =>
    property === "Outline" &&
    css`
      position: absolute;
      top: -9px;
      left: 8px;
      background-color: ${({ theme }) => theme.colors.color_neutral_0};
    `};

  ${({ property }) =>
    property === "Higher" &&
    css`
      position: absolute;
      top: -26px;
      padding: 0 4px;
    `};
`;
export const Container = styled.View<Props>`
  width: 100%;
  border: 1px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_10};

  ${({ isFocused }) =>
    isFocused &&
    css`
      padding: ${RFPercentage(1)}px ${RFPercentage(2)}px;
      border-color: ${({ theme }) => theme.colors.color_blue_40};
    `};

  ${({ isErrored }) =>
    isErrored &&
    css`
      padding: ${RFPercentage(1)}px ${RFPercentage(2)}px;
      border-color: ${({ theme }) => theme.colors.color_red_40};
    `};

  ${({ property }) =>
    property === "-" &&
    css`
      padding: ${RFPercentage(1)}px 0 ${RFPercentage(1)}px ${RFPercentage(2)}px;
      border-color: ${({ theme }) => theme.colors.color_neutral_30};
    `};

  ${({ property }) =>
    property === "Outline" &&
    css`
      padding: ${RFPercentage(2)}px;
    `};

  ${({ property }) =>
    property === "Higher" &&
    css`
      padding: ${RFPercentage(1)}px;
    `};
`;
export const WrapperInput = styled.View<Props>`
  flex: 1;
  padding: 2px 8px;
`;
export const Input = styled(TextInput)`
  width: 90%;
  height: ${RFPercentage(4)}px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const IconContainer = styled.View`
  width: 30px;
  align-items: center;
  justify-content: center;
`;
export const BtnIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin-bottom: -8px;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_blue_70};
`;
export const Error = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin-bottom: -8px;
  margin-left: 8px;
  font-weight: 400;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_red_40};
`;

export const MaskTextInput = styled(TextInputMask)<{ error?: boolean }>`
  width: 90%;
  height: ${RFPercentage(4)}px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.colors.color_neutral_70};
  border-color: ${({ theme }) => theme.colors.color_neutral_10};

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.color_red_40};
      border-color: ${({ theme }) => theme.colors.color_red_40};
    `};
`;
