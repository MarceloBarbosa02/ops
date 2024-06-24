import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_70};
  width: 31%;
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ sizeWidth: number }>`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
  width: ${({ sizeWidth }) => sizeWidth}%;
`;
export const WrapperFlag = styled.View<{ isUpdate: boolean }>`
  gap: 4px;
  padding: 4px 8px;
  flex-direction: row;
  align-items: center;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.color_yellow_40};
  background-color: ${({ theme }) => theme.colors.color_yellow_10};

  ${({ isUpdate }) =>
    isUpdate &&
    css`
      border-color: ${({ theme }) => theme.colors.color_green_40};
      background-color: ${({ theme }) => theme.colors.color_green_10};
    `};
`;
export const TextFlag = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ isUpdate: boolean }>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_yellow_40};

  ${({ isUpdate }) =>
    isUpdate &&
    css`
      color: ${({ theme }) => theme.colors.color_green_40};
    `};
`;
