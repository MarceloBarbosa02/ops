import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 12px;
`;

export const Content = styled.View`
  background-color: ${({ theme: t }) => t.colors.color_yellow_10};
  height: 60px;
  flex-direction: row;
  border-radius: 4px;
  border: 1px solid ${({ theme: t }) => t.colors.color_yellow_40};
  align-items: center;
  padding: 0 8px;
  gap: 8px;
  width: 100%;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  font-size: 14px;
  color: ${({ theme: t }) => t.colors.color_yellow_40};
  flex: 1;
`;
