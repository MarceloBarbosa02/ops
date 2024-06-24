import { Pressable } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const WrapperCard = styled(Pressable)`
  gap: 24px;
  flex-direction: row;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
  background-color: ${({ theme }) => theme.gray[200]};
  padding: 8px 16px;
  align-items: center;
`;

export const WrapperCardInfo = styled.View`
  flex: auto;
`;

export const WrapperCardInfoFlag = styled.View`
  width: 18%;
`;

export const WrapperMenu = styled.View`
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[200]};
`;

export const WrapperItem = styled(Pressable)<{ index: number }>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  ${({ index }) =>
    index !== 0 &&
    css`
      border-top-width: 1px;
      border-color: ${({ theme }) => theme.gray[300]};
    `}
`;

export const WrapperItemInfo = styled.View`
  flex: auto;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const WrapperModal = styled.View`
  gap: 8px;
  padding: ${RFPercentage(2.6)}px;
`;

export const WrapperDot = styled.View`
  padding: 2px;
  border: 2px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border-color: ${({ theme }) => theme.blue[600]};
`;

export const Dot = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.blue[600]};
`;

export const WrapperSkeleton = styled.View``;

export const Flag = styled.View`
  width: auto;
  height: auto;
  padding: 9px 8px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.gray[700]};
`;
