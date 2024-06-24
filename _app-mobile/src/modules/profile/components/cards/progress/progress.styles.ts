import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const WrapperProgress = styled.View`
  width: 100%;
  gap: 8px;
  padding: 0 ${RFPercentage(2.6)}px;
`;

export const WrapperInfo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperSteps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperDuration = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
