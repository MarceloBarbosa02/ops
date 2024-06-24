import { ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
`;
export const WrapperButton = styled(Pressable)`
  width: 100%;
  height: 48px;
  align-items: center;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
export const WrapperButtons = styled.View`
  width: 100%;
  gap: 16px;
  padding: 48px 24px 0;
`;
export const WrapperContent = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
`;
export const WrapperInfo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
