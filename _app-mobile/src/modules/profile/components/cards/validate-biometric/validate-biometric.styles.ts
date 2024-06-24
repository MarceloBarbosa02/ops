import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 24px;
  padding: 0 ${RFPercentage(2.6)}px;
`;

export const Wrapper = styled.View`
  width: 100%;
  padding: ${RFPercentage(2.6)}px;

  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperInfo = styled.View`
  width: 100%;
  padding: 8px 0 24px;
`;
export const WrapperFlag = styled.View<{ color: string }>`
  gap: 4px;
  padding: 4px 8px;
  flex-direction: row;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ color }) => color};
`;

export const TitleText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[700]};
  text-align: center;
`;
