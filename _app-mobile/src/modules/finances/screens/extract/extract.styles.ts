import { ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-top: 24px;
  padding: 0 ${RFPercentage(2.6)}px ${RFPercentage(32)}px;
`;

export const WrapperHistory = styled.View`
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperContent = styled.View`
  width: 100%;
  overflow: hidden;
  margin: 0 0 ${RFPercentage(6)}px;
`;

export const WrapperFooter = styled.View`
  width: 100%;
  align-items: center;
  /* margin: 0 0 ; */
`;
