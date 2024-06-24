import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const WrapperContent = styled.View`
  flex: 1;
`;

export const WrapperHeader = styled.View`
  padding: ${RFPercentage(2)}px ${RFPercentage(2.6)}px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.gray[200]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
