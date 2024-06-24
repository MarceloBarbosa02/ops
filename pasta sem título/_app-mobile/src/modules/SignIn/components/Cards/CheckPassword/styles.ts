import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  margin: 16px 0;
  padding: 16px;
  border: 1px;
  border-radius: 8px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const Title = styled.Text`
  margin: 4px 0;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
