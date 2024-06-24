import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  margin: 8px 0 0;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ButtonUpdatePhoneNumber = styled(TouchableOpacity)`
  background-color: ${({ theme: t }) => t.colors.color_neutral_100};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 8px;
  width: 32%;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `};
`;

export const TextButtonUpdatePhoneNumber = styled.Text`
  color: ${({ theme: t }) => t.colors.color_neutral_0};
  font-family: ${({ theme: t }) => t.fonts.Satoshi.medium};
  font-size: 18px;
`;
