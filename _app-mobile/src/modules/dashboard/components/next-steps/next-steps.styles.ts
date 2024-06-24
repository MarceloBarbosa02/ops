import { Dimensions, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

const { width } = Dimensions.get('screen');

export const Wrapper = styled.View`
  width: 100%;
  border: 1px;
  gap: 24px;
  padding: 24px 0;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  gap: 8px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const WrapperDots = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: 4px;
  border-color: ${({ theme }) => theme.blue[100]};
`;

export const Dots = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[600]};
`;

export const WrapperProgress = styled.View`
  width: 100%;
  gap: 8px;
  padding: 0 16px;
`;

export const WrapperInfo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperItem = styled.View<{
  isActive: boolean;
  isComplete: boolean;
}>`
  width: ${width / 1.5}px;
  border: 1px;
  gap: 24px;
  padding: 24px 0;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.gray[300]};

  ${({ isActive }) =>
    isActive &&
    css`
      border: 2px;
      border-color: ${({ theme }) => theme.blue[600]};
    `}

  ${({ isComplete }) =>
    isComplete &&
    css`
      border: 1px;
      border-color: ${({ theme }) => theme.blue[200]};
    `}
`;

export const WrapperItemSteps = styled.View<{ color: string }>`
  width: ${RFPercentage(5)}px;
  height: ${RFPercentage(5)}px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 16px;
  left: 16px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;

export const WrapperItemIcon = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const WrapperItemImg = styled.View<{ color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
`;

export const WrapperInfoItem = styled.View`
  width: 100%;
  align-items: center;
  padding: 0 24px;
`;

export const ButtonCompleted = styled.View`
  width: auto;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 60px;
  background-color: ${({ theme }) => theme.blue[50]};
`;

export const ButtonCompletedText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.blue[200]};
`;

export const WrapperSkeleton = styled.View``;
export const WrapperSkeletonLine = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
