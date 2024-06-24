import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  padding: ${RFPercentage(2)}px ${RFPercentage(2.6)}px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[600]};
`;
export const WrapperInput = styled.View`
  width: 100%;
  margin: 8px 0 16px;
  padding: 8px 14px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
