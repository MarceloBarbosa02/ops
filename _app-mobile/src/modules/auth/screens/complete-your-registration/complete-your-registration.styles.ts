import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  border-radius: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: ${RFPercentage(2.6)}px;
`;

export const WrapperLogo = styled.View`
  align-items: center;
  padding: 24px 0;
`;
export const WrapperCard = styled.View`
  width: 100%;
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px 14px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.gray[100]};
`;
export const WrapperCount = styled.View`
  width: 100%;
  align-items: start;
  margin-top: -8px;
`;
export const WrapperButton = styled.View`
  width: 100%;
  align-items: start;
  margin-top: 16px;
  padding: 0 8px;
`;
export const Container = styled.View`
  margin-top: 16px;
  gap: 24px;
`;
