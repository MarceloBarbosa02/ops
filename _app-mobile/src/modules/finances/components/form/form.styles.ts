import { TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 8px 16px;
`;

export const WrapperHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export const ContainerItems = styled.View`
  margin-top: 12px;
  border: 1px;
  border-radius: 4px;
  overflow: hidden;
  border-color: ${({ theme }) => theme.gray[200]};
`;
export const ItemsOrigin = styled.View<{ index: number }>`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.gray[200]};
  padding: 12px ${RFPercentage(2)}px;

  ${({ index }) =>
    index === 0 &&
    css`
      border-top-width: 0;
    `};
`;
export const BtnAll = styled(TouchableOpacity)``;
