import { Platform, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  margin-top: 24px;
  flex: 1;
  padding-bottom: 16px;
  justify-content: space-between;
`;
export const WrapperButton = styled.View`
  padding: 0 ${RFPercentage(2)}px;
`;

export const WrapperTitle = styled.View`
  width: 100%;
  padding: 24px 24px 16px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.gray[100]};
`;
export const WrapperIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.gray[200]};
`;
export const WrapperHeaderIcon = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperBtnClose = styled(TouchableOpacity)``;
export const WrapperButtonCalendar = styled(TouchableOpacity)<{
  isActive: boolean;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-color: ${theme.blue[600]};
    `};
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  gap: 16px;
  padding: 16px 24px ${Platform.OS === 'ios' ? 24 : 56}px;
`;

export const WrapperItems = styled.View`
  gap: 8px;
`;
export const WrapperCard = styled.View`
  margin-top: 16px;
  padding: 16px;
  gap: 8px;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.gray[300]};
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const WrapperProducts = styled.View`
  flex: 1;
  /* height: auto; */
  /* height: 200px; */
  margin-bottom: 16px;
  padding: 0 0 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.gray[100]};
`;

export const WrapperProductsHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const DescriptionCard = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
  line-height: 24px;
`;

export const WrapperReason = styled.View`
  width: 100%;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.gray[50]};
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
