import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: ${RFPercentage(2.6)}px;
  gap: 16px;
`;

export const WrapperList = styled.View`
  margin: 4px 0 64px;
  gap: 24px;
`;
export const WrapperCard = styled.View`
  gap: 16px;
  padding: 16px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
export const WrapperCardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.button.orange[100]};
`;
export const WrapperTextGenerics = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.button.text.secondary};
  width: 85%;
`;

export const WrapperOut = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const WrapperOutCard = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 12px;
  background-color: ${({ theme }) => theme.button.orange[100]};
`;

export const WrapperFooter = styled.View`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.gray[100]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFPercentage(2)}px ${RFPercentage(2.6)}px;
  margin: 16px;
`;
export const TitleCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.button.text.secondary};
  width: 90%;
`;
export const WrapperContent = styled.View`
  padding: 0 ${RFPercentage(2.6)}px;
  gap: 24px;
`;
