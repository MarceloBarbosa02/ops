import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
