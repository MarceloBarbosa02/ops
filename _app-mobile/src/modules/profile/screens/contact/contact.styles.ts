import { TouchableOpacity } from 'react-native';
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

export const WrapperCardHeader = styled.View`
  gap: 4px;
`;

export const WrapperCardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const WrapperForm = styled.View`
  margin: 12px 0 4px;
`;

export const WrapperFormPin = styled.View`
  margin: 12px 0;
  align-items: center;
  justify-content: center;
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

export const WrapperPhoneButtons = styled.View`
  gap: 16px;
  margin: 24px 0;
`;

export const WrapperPhoneButtonInfo = styled.View`
  gap: 16px;
  flex-direction: row;
  align-items: center;
`;

export const WrapperPhoneButtonCode = styled.View`
  width: 100%;
  margin-top: 8px;
  margin-left: -16px;
`;

export const WrapperPhoneButtonFinished = styled.View`
  width: 100%;
  margin-top: 8px;
`;

export const WrapperPhoneButtonSelect = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperTextPhone = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
`;

export const WrapperTextPhoneInfo = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
  width: 90%;
`;
