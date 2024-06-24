import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  margin: 4px 0;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_80};
`;
