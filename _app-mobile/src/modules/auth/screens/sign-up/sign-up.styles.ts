import { TouchableOpacity } from 'react-native';
import { Pressable } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  border-radius: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: ${RFPercentage(3)}px;
`;

export const WrapperLogo = styled.View`
  align-items: center;
  padding: 24px 0;
`;

export const WrapperForm = styled.View`
  margin-top: 16px;
  gap: 4px;
`;

export const WrapperButtons = styled.View`
  width: 100%;
  gap: 32px;
  margin-top: 8px;
`;

export const WrapperButton = styled.View`
  align-items: flex-end;
`;

export const WrapperButtonLogin = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin: 4px 0 ${RFPercentage(3)}px;
`;

export const TitleText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[700]};
  text-align: center;
`;

export const TermText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.blue[600]};
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

export const WrapperModal = styled.View`
  padding: 12px 24px;
  width: 90%;
  border-radius: 8px;
  justify-content: center;
`;

export const WrapperModalItem = styled(Pressable)`
  padding: 12px 24px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
