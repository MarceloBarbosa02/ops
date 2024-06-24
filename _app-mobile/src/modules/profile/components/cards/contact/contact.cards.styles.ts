import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  padding: 16px;
  border: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonPendent = styled(TouchableOpacity)`
  width: 'auto';
  padding: 4px 12px;
  border: 1px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.orange[500]};
`;
