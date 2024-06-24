import { Pressable } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  gap: 24px;
  padding: 0 0 ${RFPercentage(12)}px;
`;

export const WrapperActive = styled.View`
  margin-right: 12px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: 8px 12px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const WrapperBtnClear = styled(Pressable)``;
export const WrapperFiltersActive = styled.ScrollView``;

export const WrapperFilter = styled.View`
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
`;
export const WrapperAct = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${RFPercentage(7.5)}px;
  padding: 0 0 0 ${RFPercentage(3)}px;
`;

export const BtnActiveClear = styled.TouchableOpacity`
  height: 46px;
  padding: 12px;
  align-items: center;
  justify-content: center;
`;
export const WrapperFooter = styled.View`
  width: 100%;
  align-items: center;
`;
export const WrapperHeader = styled.View`
  width: 100%;
  padding: ${RFPercentage(2.6)}px;
`;
