import { Pressable } from 'react-native';
import { TextInput } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const WrapperHeader = styled.View`
  width: 100%;
  gap: 16px;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperInfo = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WrapperDot = styled.View`
  width: auto;
  height: auto;
  padding: 6px 8px;
  align-items: center;
  justify-content: center;
  border-radius: 99999px;
  background-color: ${({ theme }) => theme.gray[300]};
`;
export const WrapperInput = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperInputSearch = styled.View<{ color: string }>`
  width: 78%;
  height: 48px;
  border: 1px;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  border-color: ${({ color }) => color};
`;
export const InputSearch = styled(TextInput)`
  width: auto;
  padding: 0 8px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.gray[700]};
`;

export const WrapperActive = styled.View`
  margin-right: 8px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
export const WrapperBtnClear = styled(Pressable)``;
export const WrapperFiltersActive = styled.ScrollView``;

export const WrapperFilter = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: -8px;
`;
export const WrapperAct = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BtnActiveClear = styled.TouchableOpacity`
  height: 46px;
  /* padding: 12px; */
  align-items: center;
  justify-content: center;
`;
