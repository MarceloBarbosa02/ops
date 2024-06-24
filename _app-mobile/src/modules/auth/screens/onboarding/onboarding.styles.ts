import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.gray[50]};
`;

export const WrapperLogo = styled.View`
  align-items: center;
  padding: 24px 0;
  margin-top: 56px;
`;
export const Footer = styled.View`
  width: 100%;
  padding: 0 ${RFPercentage(6)}px;
  margin-bottom: ${RFPercentage(12)}px;
`;
