import { Platform } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const Content = styled.View`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  text-align: center;
`;
export const WrapperHeaderEnv = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 4px 24px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.blue_l300_d600};
  background-color: ${({ theme }) => theme.colors.blue_l50_d900};
`;
