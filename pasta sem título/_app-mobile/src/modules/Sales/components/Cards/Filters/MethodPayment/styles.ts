import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  padding: 8px 16px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const ContainerItems = styled.View`
  margin-top: 12px;
  border: 1px;
  border-radius: 12px;
  overflow: hidden;
  border-color: ${({ theme }) => theme.colors.color_neutral_10};
`;
export const ItemsOrigin = styled.View<{ index: number }>`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_10};
  /* height: 56px; */
  padding: 0 ${RFPercentage(2)}px;

  ${({ index }) =>
    index === 0 &&
    css`
      border-top-width: 0;
    `};
`;
export const BtnAll = styled(TouchableOpacity)``;
export const AllText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  color: ${({ theme }) => theme.colors.color_blue_40};
`;
