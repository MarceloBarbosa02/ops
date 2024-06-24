import { TextInputMask } from 'react-native-masked-text';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  margin-top: ${RFPercentage(2)}px;
  padding: 0 ${RFPercentage(2.6)}px;
`;

export const WrapperHeaderTitle = styled.View`
  width: 100%;
  padding: 0 0 16px;
`;

export const WrapperItemHorizontal = styled.View`
  width: 100%;
  gap: 16px;
  flex-direction: row;
  align-items: start;
`;

export const WrapperDoc = styled.View`
  width: 100%;
  gap: 8px;
  padding: 4px 8px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[200]};
`;

export const WrapperIsRequired = styled.View<{ isDisabled: boolean }>`
  align-items: center;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 4px;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.4;
    `}
`;

export const WrapperCard = styled.View`
  padding: 0 ${RFPercentage(2.6)}px ${RFPercentage(3)}px;
`;

export const WrapperInfo = styled.View`
  width: auto;
  margin-top: ${RFPercentage(3)}px;
  padding: ${RFPercentage(1)}px;
  border: 1px;
  border-style: dashed;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.blue[600]};
  /* background-color: ${({ theme }) => theme.blue[50]}; */
`;

export const MaskTextInput = styled(TextInputMask)<{ error?: boolean }>`
  flex: auto;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[800]};
`;
