import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 50px;
  padding: 4px 0;
`;
export const Title = styled.Text`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  width: 55%;
`;
export const TextIdentifier = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  width: 32%;
`;
