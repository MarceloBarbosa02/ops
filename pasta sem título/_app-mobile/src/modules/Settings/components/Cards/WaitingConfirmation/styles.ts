import styled, { css } from "styled-components/native";

export const Label = styled.Text<{ first?: boolean }>`
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  margin-bottom: 8px;
  font-family: ${({ theme: t }) => t.fonts.Satoshi.bold};
  color: ${({ theme: t }) => t.colors.color_neutral_90};
`;

export const ChangeContactText = styled.Text`
  font-family: ${({ theme: t }) => t.fonts.Satoshi.regular};
  color: ${({ theme: t }) => t.colors.color_neutral_70};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  flex: 1;
`;

export const ChangeContactTextBold = styled.Text`
  font-weight: 700;
  font-family: ${({ theme: t }) => t.fonts.Satoshi.bold};
  color: ${({ theme: t }) => t.colors.color_neutral_70};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  flex: 1;
`;

export const ChangeContactTexRegular = styled.Text`
  font-family: ${({ theme: t }) => t.fonts.Satoshi.regular};
  color: ${({ theme: t }) => t.colors.color_neutral_60};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  flex: 1;
`;

export const AlertContainer = styled.View`
  background-color: ${({ theme: t }) => t.colors.color_neutral_10};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 8px;
  margin: 10px 0;
  border-radius: 8px;
`;
