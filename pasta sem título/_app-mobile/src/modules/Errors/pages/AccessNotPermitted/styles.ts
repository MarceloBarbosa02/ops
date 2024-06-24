import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  padding: ${RFPercentage(2)}px ${RFPercentage(3)}px;
`;
export const Container = styled.View`
  flex: 1;
  padding: ${RFPercentage(2)}px 0;
`;
export const Content = styled.View`
  margin-top: 36px;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 24px;
  width: 100%;
  border: 1px;
  border-radius: 16px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
  text-align: center;
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  text-align: center;
`;
export const WrapperButton = styled.View`
  width: 100%;
  gap: 12px;
`;
export const WrapperImg = styled.View`
  width: 100%;
  margin-top: 114px;
  align-items: center;
  justify-content: center;
`;
