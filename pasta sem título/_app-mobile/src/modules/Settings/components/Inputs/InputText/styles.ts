import { TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
  isErrored?: boolean;
  isFocused?: boolean;
  property?: "Filled" | "Outline" | "Higher" | "-";
}

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${RFPercentage(2)}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_blue_70};
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.3,
})<Props>`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  margin-bottom: 4px;
`;
export const Container = styled.View<Props>`
  flex: 1;
`;
export const WrapperInput = styled.View<Props>`
  padding: ${RFPercentage(2)}px;
  border: 1px;
  border-radius: 8px;
  flex-direction: row;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.color_red_40};
    `};

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.color_blue_40};
    `};
`;
export const Input = styled(TextInput)`
  width: 90%;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_80};

  ${({ editable }) =>
    !editable &&
    css`
      color: ${({ theme }) => theme.colors.color_neutral_40};
    `};
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
export const Description = styled.Text`
  margin-bottom: -8px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_blue_70};
`;
export const Error = styled.Text`
  font-size: 10px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_red_40};
`;
export const MaskTextInput = styled(TextInputMask)`
  width: 90%;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  color: ${({ theme }) => theme.colors.color_neutral_80};

  ${({ editable }) =>
    !editable &&
    css`
      color: ${({ theme }) => theme.colors.color_neutral_40};
    `};
`;
