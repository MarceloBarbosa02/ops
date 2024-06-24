import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: ${RFPercentage(2.6)}px;
  gap: ${RFPercentage(3)}px;
`;

export const WrapperOptions = styled.View`
  gap: 8px;
  margin-top: ${RFPercentage(3)}px;
`;

//old
export const WrapperOld = styled.View`
  width: 100%;
  padding: 16px;
  justify-content: space-between;
`;
export const WrapperItem = styled.View`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.gray[100]};
`;
