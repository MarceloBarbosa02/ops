import { TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: auto;
  gap: 8px;
  padding: 8px ${RFPercentage(2)}px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperCard = styled.View`
  width: auto;
  gap: 8px;
  margin-top: 8px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const WrapperModal = styled.View`
  width: auto;
  gap: 12px;
  align-items: center;
`;

export const WrapperModalItem = styled.View<{ opacity: number }>`
  width: 100%;
  gap: 12px;
  align-items: center;
  flex-direction: row;
  opacity: ${({ opacity }) => opacity};
`;

export const WrapperCardInfo = styled.View`
  width: 66%;
`;

export const WrapperCardIcon = styled(TouchableOpacity)<{ isActive: boolean }>`
  width: 31%;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};

  ${({ isActive }) =>
    isActive &&
    css`
      border: 2px;
      border-color: ${({ theme }) => theme.blue[600]};
    `};
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ isActive: boolean }>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.gray[900]};
  text-align: center;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0.5;
    `}
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[900]};
  text-align: center;
  margin-top: -12px;
`;

export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperInfo = styled.View`
  gap: 2px;
`;

export const WrapperProgress = styled.View`
  width: 100%;
  gap: 8px;
`;

export const WrapperProgressHeader = styled.View`
  width: 100%;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperIcon = styled.View`
  width: 67px;
  height: 67px;
  align-items: center;
  justify-content: center;
`;

export const WrapperIconComplete = styled.View`
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
`;

export const WrapperSkeleton = styled.View``;
export const WrapperSkeletonCard = styled.View`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
`;
