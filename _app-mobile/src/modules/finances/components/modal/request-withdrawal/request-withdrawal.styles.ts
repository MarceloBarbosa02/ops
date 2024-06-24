import { TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  /* flex: 1; */
  height: 100%;
  /* height: 500px; */

  justify-content: space-between;
  /* border: 1px; */
`;

export const WrapperModal = styled.View`
  /* height: 100%; */
  padding: 0 ${RFPercentage(2.6)}px 16px;
`;

export const WrapperItems = styled.View`
  margin: 16px 0;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const Item = styled.View<{ not?: boolean }>`
  padding: 12px 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.gray[300]};

  ${({ not }) =>
    not &&
    css`
      border-bottom-width: 0;
      background-color: ${({ theme }) => theme.menu.gray};
    `};
`;

export const WrapperCard = styled.View`
  margin-top: ${RFPercentage(10)}px;
  margin-bottom: ${RFPercentage(2)}px;
  padding: 16px;
  gap: 8px;
  border: 1px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.gray[100]};
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const WrapperCardFooter = styled.View`
  margin-bottom: 16px;
`;

export const WrapperTitle = styled.View`
  width: 100%;
  padding: 16px 24px;
`;
export const WrapperHeaderIcon = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperBtnClose = styled(TouchableOpacity)``;
