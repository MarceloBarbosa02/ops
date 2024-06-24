import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.button.orange[100]};
`;
export const TitleText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.button.text.secondary};
`;

export const WrapperInfo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.gray[100]};
`;
export const TitleTextInfo = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[700]};
  width: 90%;
`;
