import styled from "styled-components/native";

export const Title = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.large}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  text-align: center;
`;
export const Description = styled.Text`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 48px;
  margin-top: 36px;
  align-items: center;
`;
