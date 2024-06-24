import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  padding: ${RFPercentage(1)}px ${RFPercentage(2)}px ${RFPercentage(4)}px;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;

export const WrapperTable = styled.View`
  width: 100%;
  align-items: center;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.gray_l200_d700};
`;

export const WrapperTableHeader = styled.View`
  width: 100%;
  padding: 16px;
  gap: 8px;
  flex-direction: row;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_l200_d700};
`;

export const WrapperTableLine = styled.View<{ last?: boolean }>`
  width: 100%;
  padding: 8px 16px;
  border-bottom-width: ${({ last }) => (last ? 0 : 1)}px;
  border-color: ${({ theme }) => theme.colors.gray_l200_d700};
`;
