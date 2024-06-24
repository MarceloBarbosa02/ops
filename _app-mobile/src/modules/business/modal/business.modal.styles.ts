import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Container = styled.View`
  flex: 1;
  padding: ${RFPercentage(2.6)}px;
`;

export const WrapperBusiness = styled.View`
  padding: 8px 12px;
  margin-bottom: 12px;
  border: 1px;
  border-radius: 4px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.gray[500]};
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
