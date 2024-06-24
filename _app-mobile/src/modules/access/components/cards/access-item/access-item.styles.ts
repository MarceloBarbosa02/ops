import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  margin-bottom: ${RFPercentage(2)}px;
  padding: 10px ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperButtons = styled.View`
  width: 100%;
  gap: 16px;
  padding: ${RFPercentage(2.6)}px;
`;

export const WrapperItems = styled.View`
  width: 100%;
  padding: 8px ${RFPercentage(2.6)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
