import { TextInput } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
`;

export const WrapperInput = styled.View`
  width: 70%;
  margin-left: 36px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.blue[600]};
`;

export const Input = styled(TextInput)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[700]};
`;
