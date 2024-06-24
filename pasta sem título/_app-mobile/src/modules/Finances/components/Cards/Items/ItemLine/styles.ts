import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l500_d400};
  line-height: 24px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ isCanceled?: boolean }>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
  text-align: right;
  line-height: 24px;

  ${({ isCanceled, theme }) =>
    isCanceled &&
    css`
      text-decoration: line-through;
      text-decoration-color: ${theme.colors.gray_l600_d300};
    `}
`;
export const WrapperInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperDescription = styled.View`
  align-items: flex-end;
`;

export const TitleDescription = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ isCanceled?: boolean }>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l800_d100};

  ${({ isCanceled, theme }) =>
    isCanceled &&
    css`
      text-decoration: line-through;
      text-decoration-color: ${theme.colors.gray_l600_d300};
    `}
`;

export const TitleLabel = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ isCanceled?: boolean }>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l800_d100};

  ${({ isCanceled, theme }) =>
    isCanceled &&
    css`
      text-decoration: line-through;
      text-decoration-color: ${theme.colors.gray_l600_d300};
    `}
`;
export const WrapperBtnCopy = styled(TouchableOpacity)``;
