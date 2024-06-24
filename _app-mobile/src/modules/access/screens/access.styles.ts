import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: ${RFPercentage(2.6)}px;
`;

export const WrapperCards = styled.View`
  margin-top: ${RFPercentage(2.6)}px;
  gap: ${RFPercentage(3)}px;
`;
