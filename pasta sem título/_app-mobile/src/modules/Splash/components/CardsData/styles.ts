import styled from "styled-components/native";

import { Dimensions } from "react-native";

export const Wrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  align-items: center;
  justify-content: center;
  padding: 0 48px;
  margin-top: 48px;
  margin-bottom: 12px;
`;
export const Title = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.large}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_90};
  text-align: center;
  margin: 32px 0 8px;
`;
export const Description = styled.Text`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  text-align: center;
`;
export const Img = styled.Image`
  width: 240px;
  height: 100px;
`;
