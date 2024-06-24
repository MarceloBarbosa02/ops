import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  border-radius: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: 24px;
`;

export const WrapperLogo = styled.View`
  align-items: center;
  padding: 24px 0;
`;

export const WrapperInfo = styled.View`
  align-items: center;
  padding: 12px 24px 24px;
  gap: 18px;
  margin-bottom: 12px;
`;

export const WrapperForm = styled.View`
  gap: 18px;
  margin-top: 12px;
`;

export const WrapperButtonLogin = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
`;

export const TitleText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
  text-align: center;
`;
