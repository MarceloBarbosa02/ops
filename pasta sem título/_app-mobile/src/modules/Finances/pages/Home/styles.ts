import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const Container = styled.View`
  width: 100%;
  gap: ${RFPercentage(3)}px;
  padding: 0 ${RFPercentage(3)}px;
  padding-bottom: ${RFPercentage(10)}px;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;

export const DescriptionExtract = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;

export const Content = styled.View`
  width: 100%;
  gap: 24px;
`;

export const WrapperFooter = styled.View`
  width: 100%;
  align-items: center;
  padding: 0 0 24px;
`;

export const WrapperExtract = styled.View`
  width: 100%;
  gap: 8px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
  padding: ${RFPercentage(1.4)}px ${RFPercentage(2)}px;
`;
