import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: 16px ${RFPercentage(2.6)}px 24px;
`;
