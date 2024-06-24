import styled from "styled-components/native";

export const WrapperInfo = styled.View`
  gap: 8px;
  padding: 16px 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_l100_d800};
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l600_d300};
  line-height: 24px;

  text-align: center;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l500_d400};
  text-align: center;
  line-height: 24px;
  width: 70%;
`;
