import { Pressable, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  gap: 24px;
`;

export const WrapperContact = styled.View`
  gap: 24px;
  height: 100%;
  justify-content: space-between;
`;
export const WrapperHeader = styled.View`
  padding: ${RFPercentage(3)}px ${RFPercentage(2.6)}px 0;
`;
export const WrapperEmail = styled.View`
  padding: ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
export const WrapperContent = styled.View`
  padding: 0 ${RFPercentage(2.6)}px;
  gap: 24px;
`;
export const WrapperCard = styled.View`
  gap: 8px;
  padding: ${RFPercentage(2)}px;
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
export const WrapperCount = styled.View`
  width: 100%;
  align-items: start;
  margin-top: -4px;
  margin-left: -16px;
  padding: 0 0 16px;
`;
export const TitleText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
`;

export const WrapperOut = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const WrapperOutCard = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 12px;
  margin-top: 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.button.orange[100]};
`;

export const WrapperFooter = styled.View`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.gray[100]};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFPercentage(2)}px ${RFPercentage(2.6)}px;
  margin: 16px;
`;
export const TitleCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.button.text.secondary};
  width: 90%;
`;

export const WrapperButton = styled.View`
  width: 100%;
  padding: ${RFPercentage(2)}px ${RFPercentage(2.6)}px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperInfoModal = styled.View`
  width: 100%;
  padding: ${RFPercentage(2.6)}px;
  gap: 8px;
`;

export const WrapperModal = styled.View`
  padding: 12px 24px;
`;

export const WrapperModalItem = styled(Pressable)`
  padding: 12px 0;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const WrapperError = styled.View`
  margin-left: 4px;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;
