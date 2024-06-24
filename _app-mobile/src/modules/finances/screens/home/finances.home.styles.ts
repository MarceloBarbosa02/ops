import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  gap: 24px;
  margin-top: 24px;
`;

export const WrapperButton = styled(Pressable)`
  padding: 12px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
