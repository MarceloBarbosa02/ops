import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Wrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  align-items: center;
  justify-content: center;
  padding: 0 48px;
`;
export const Img = styled.Image`
  width: 240px;
  height: 100px;
`;
export const WrapperInfo = styled.View`
  margin-top: 32px;
  gap: 8px;
`;
