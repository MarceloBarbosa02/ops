import styled, { css } from "styled-components/native";
import { Image } from "react-native";

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})``;

export const Wrapper = styled.TouchableOpacity<{ active: boolean }>`
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_70};
  padding: 8px;
  flex-direction: row;
  justify-content: space-between;

  ${({ active }) =>
    active &&
    css`
      border-color: ${({ theme }) => theme.colors.color_blue_40};
    `}
`;
