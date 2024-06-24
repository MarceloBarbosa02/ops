import { Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperItem = styled.View`
  width: 100%;
  padding: 4px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonMore = styled(Pressable)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const WrapperFooter = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: 8px;
  align-items: center;
`;
