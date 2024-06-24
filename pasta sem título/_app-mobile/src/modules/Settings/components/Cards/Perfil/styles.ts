import styled from "styled-components/native";

export const Wrapper = styled.View`
  gap: 16px;
  margin-top: 32px;
`;
export const WrapperIcon = styled.View`
  gap: 4px;
  align-items: center;
  flex-direction: row;
`;
export const WrapperTooltipIcon = styled.View`
  padding: 6px 0;
`;
export const TitleTooltip = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  color: ${({ theme }) => theme.color_buttons.bg_outlined};
  width: 90%;
  text-align: center;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ color: string }>`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  color: ${({ color }) => color};
  text-align: center;
`;
