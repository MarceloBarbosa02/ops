import { TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  padding: 8px 0;
`;

export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  gap: 4px;
`;

export const WrapperItemCard = styled.View<{ widthSize: number }>`
  width: ${({ widthSize }) => widthSize}%;
  padding: 8px ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperItemInfo = styled.View`
  align-items: flex-end;
`;

export const WrapperItem = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 8px;
`;
export const ContainerLine = styled.View`
  width: 100%;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Container = styled.View`
  width: 100%;
  gap: 8px;
  align-items: center;
`;
export const ContainerHeader = styled.View`
  width: 100%;
  gap: 8px;
  padding: 8px 0;
  align-items: center;
  flex-direction: row;
`;
export const BtnToggle = styled(TouchableOpacity)`
  flex-direction: row;
`;
export const WrapperLabel = styled.View`
  gap: 6px;
  flex-direction: row;
  align-items: center;
`;

export const WrapperSkeleton = styled.View``;
export const WrapperSkeletonLine = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperSkeletonHeader = styled.View`
  width: 100%;
  margin-top: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
`;
export const WrapperSkeletonItem = styled.View`
  width: 48%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
`;
