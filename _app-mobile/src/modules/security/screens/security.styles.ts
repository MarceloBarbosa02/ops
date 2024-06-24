import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  padding: ${RFPercentage(2.6)}px;
`;
export const WrapperCard = styled.View`
  padding: ${RFPercentage(2.6)}px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
  gap: 16px;
`;
export const WrapperForm = styled.View``;
export const WrapperFormButtons = styled.View``;
export const WrapperFormPin = styled.View``;
export const WrapperFormNewPassword = styled.View``;
export const WrapperCardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const WrapperTextGenerics = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
  width: 85%;
`;

export const WrapperTextCard = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
`;
export const WrapperCardHeader = styled.View`
  gap: 4px;
`;
export const WrapperButtonCode = styled.View`
  width: 100%;
  margin-top: 8px;
`;
export const WrapperButtonFooter = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
`;
