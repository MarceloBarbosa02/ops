import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const WrapperButton = styled.View`
  width: 100%;
  padding: ${RFPercentage(2)}px ${RFPercentage(2.6)}px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperInfoModal = styled.View`
  width: 100%;
  padding: ${RFPercentage(2.6)}px;
  gap: 8px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
  line-height: 24px;
`;
