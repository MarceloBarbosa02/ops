import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface Props {
  isErrored?: boolean;
  isFocused?: boolean;
  property?: "Filled" | "Outline" | "Higher" | "-";
}

export const Wrapper = styled.View<Props>`
  width: 100%;
  padding: 16px 0;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_blue_70};
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<Props>`
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_blue_70};
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
      padding: 0 4px;
      background-color: ${({ theme }) => theme.colors.color_neutral_0};
    `};

  ${({ property }) =>
    property === "Higher" &&
    css`
      position: absolute;
      top: -24px;
      left: 8px;
      padding: 0 4px;
      background-color: ${({ theme }) => theme.colors.color_neutral_0};
    `};
`;
export const Container = styled.View<Props>`
  width: 100%;
  border: 1px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};

  ${({ isFocused }) =>
    isFocused &&
    css`
      border: 1px;
      padding: 8px 16px;
      border-color: ${({ theme }) => theme.colors.color_blue_40};
    `};

  ${({ isErrored }) =>
    isErrored &&
    css`
      padding: 8px 16px;
      border-color: ${({ theme }) => theme.colors.color_red_40};
    `};

  ${({ property }) =>
    property === "-" &&
    css`
      padding: 8px 0 8px 16px;
      border-color: ${({ theme }) => theme.colors.color_neutral_30};
    `};

  ${({ property }) =>
    property === "Outline" &&
    css`
      padding: 16px;
    `};

  ${({ property }) =>
    property === "Higher" &&
    css`
      padding: 16px;
    `};
`;
export const WrapperInput = styled.View<Props>`
  flex: 1;
  padding: 0 8px;
`;
export const Input = styled(TextInput).attrs({
  maxFontSizeMultiplier: 1.1,
})`
  width: 90%;
  height: 36px;
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
export const Descrition = styled.Text`
  margin-bottom: -8px;
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_blue_70};
`;
