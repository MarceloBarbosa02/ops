import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { TSelectStyle } from './select.types';
import { Pressable } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Wrapper = styled(TouchableOpacity)<TSelectStyle>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${RFPercentage(7)}px;
  padding: 0 ${RFPercentage(1.5)}px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: ${theme.blue[50]};
      border-color: ${theme.blue[600]};
    `}

  ${({ isErrored, theme }) =>
    isErrored &&
    css`
      background-color: ${theme.red[50]};
      border-color: ${theme.red[600]};
    `}

  ${({ isDisabled, theme }) =>
    isDisabled &&
    css`
      background-color: ${theme.gray[100]};
      border-color: ${theme.gray[200]};
    `}
`;
export const Container = styled.View<{
  isDisabled: boolean;
  sizeWidth?: number;
}>`
  width: ${({ sizeWidth }) => sizeWidth}%;
  padding: 0 0 16px;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.6;
    `}
`;
export const LabelContainer = styled.View`
  gap: 4px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 2px;
`;

export const SelectOptions = styled(Pressable)`
  padding: 2px ${RFPercentage(1.3)}px;
  align-items: center;
  flex-direction: row;
`;
export const ErrorContainer = styled.View`
  margin: 8px 16px 0;
`;
