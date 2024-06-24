import styled, { css } from "styled-components/native";

export const Wrapper = styled.TouchableOpacity<{ widthSize: number }>`
  width: ${({ widthSize }) => widthSize}%;
  /* flex: 1; */
  min-height: 48px;
  padding: 12px 0;
  gap: 8px;
  align-items: center;
  flex-direction: row;
`;
export const SelectBtn = styled.View<{ active: boolean }>`
  width: 16px;
  height: 16px;
  border: 2px;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.blue_l600_d300};
  background-color: ${({ theme }) => theme.colors.color_neutral_0};

  ${({ active }) =>
    active &&
    css`
      border-color: ${({ theme }) => theme.colors.blue_l600_d300};
      background-color: ${({ theme }) => theme.colors.blue_l600_d300};
    `};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ fontSize: "small" | "medium" | "large" }>`
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  width: 85%;

  ${({ fontSize, theme }) =>
    fontSize === "small" &&
    `
  font-size: ${theme.fonts.sizes.smallX}px;
  `};

  ${({ fontSize, theme }) =>
    fontSize === "medium" &&
    `
  font-size: ${theme.fonts.sizes.medium}px;
  `};

  ${({ fontSize, theme }) =>
    fontSize === "large" &&
    `
  font-size: ${theme.fonts.sizes.large}px;
  `};
`;
