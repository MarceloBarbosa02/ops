import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  padding: ${RFPercentage(2.6)}px;
`;
export const WrapperCard = styled.View`
  gap: 8px;
  padding: 16px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
export const WrapperForm = styled.View`
  margin: 12px 0 4px;
`;
export const WrapperCardHeader = styled.View`
  gap: 4px;
`;
export const WrapperTextEmail = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
`;
export const WrapperEmailButtonCode = styled.View`
  width: 100%;
  margin-top: 8px;
  margin-left: -16px;
`;
export const WrapperError = styled.View`
  margin-left: 4px;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;
