import { Pressable, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  padding: ${RFPercentage(2.6)}px;
`;
export const WrapperCard = styled.View`
  gap: 8px;
  padding: 16px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
export const WrapperPhone = styled.View`
  align-items: center;
  flex-direction: row;
  margin-right: 8px;
  gap: 8px;
`;

export const WrapperPhoneInput = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;
export const WrapperForm = styled.View`
  margin: 12px 0 4px;
`;
export const WrapperCardHeader = styled.View`
  gap: 4px;
`;
export const WrapperTextPhone = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
`;
export const WrapperPhoneButtonCode = styled.View`
  width: 100%;
  margin-top: 8px;
  margin-left: -16px;
`;
export const WrapperModal = styled.View`
  padding: 12px 24px;
`;
export const WrapperError = styled.View`
  margin-left: 4px;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const WrapperModalItem = styled(Pressable)`
  padding: 12px 0;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
