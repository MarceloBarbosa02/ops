import { TouchableOpacity, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
  type?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "outlined"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "link-stroke"
    | "link";
  typeFont?: "small" | "medium" | "large" | "largeX";
  isDisabled?: boolean;
  isLoading?: boolean;
  sizeWidth?: number;
}

export const Wrapper = styled(TouchableOpacity)<Props>`
  width: ${({ sizeWidth }) => sizeWidth}%;
  align-items: center;
  justify-content: center;
  border: 2px;
  border-radius: 8px;
  flex-direction: row;
  gap: ${RFPercentage(1)}px;
  overflow: hidden;
  padding: 10px 0;

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      background-color: ${theme.colors.color_neutral_30};
      border-color: ${theme.colors.color_neutral_30};
    `};

  ${({ isLoading }) =>
    isLoading &&
    css`
      height: ${RFPercentage(6)}px;
      padding: 16px 0;
    `};

  ${({ type, theme }) =>
    type === "info" &&
    css`
      background-color: ${theme.colors.color_blue_40};
      border-color: ${theme.colors.color_blue_40};
    `};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<Props>`
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-weight: 700;
  text-align: center;

  ${({ type }) =>
    type === "primary" &&
    css`
      color: #fdfdfd;
    `};

  ${({ type }) =>
    type === "danger" &&
    css`
      color: #fdfdfd;
    `};

  ${({ type, theme }) =>
    type === "link" &&
    css`
      color: ${theme.colors.color_blue_40};
      text-decoration: underline;
      text-decoration-color: ${theme.colors.color_blue_40};
    `};

  ${({ type }) =>
    type === "info" &&
    css`
      color: #fdfdfd;
    `};

  ${({ type, theme }) =>
    type === "link-stroke" &&
    css`
      color: ${theme.colors.color_neutral_70};
    `};

  ${({ type, theme }) =>
    type === "outlined" &&
    css`
      color: ${theme.colors.color_blue_50};
    `};

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      color: ${theme.colors.color_neutral_70};
    `};

  ${({ type, isDisabled, theme }) =>
    type === "outlined" &&
    isDisabled &&
    css`
      color: ${theme.colors.color_neutral_30};
    `};

  ${({ type, theme }) =>
    type === "secondary" &&
    css`
      color: ${theme.colors.color_neutral_0};
    `};

  ${({ type, theme }) =>
    type === "tertiary" &&
    css`
      color: ${theme.colors.color_neutral_100};
    `};

  ${({ typeFont, theme }) =>
    typeFont === "small" &&
    css`
      font-size: ${theme.fonts.sizes.smallX}px;
    `};

  ${({ typeFont, theme }) =>
    typeFont === "large" &&
    css`
      font-size: ${theme.fonts.sizes.medium}px;
    `};

  ${({ typeFont, theme }) =>
    typeFont === "largeX" &&
    css`
      font-size: ${theme.fonts.sizes.mediumX}px;
    `};
`;
export const Icon = styled.View<Props>`
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.7;
    `};
`;
export const ContainerGif = styled.View<Props>`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const ImageGif = styled(Image)`
  width: ${RFPercentage(6)}px;
  height: ${RFPercentage(6)}px;
`;
