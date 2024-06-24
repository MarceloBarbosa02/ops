import { TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  padding: 8px ${RFPercentage(2)}px;
  border: 1px;
  gap: 8px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperFilterHeader = styled.View`
  width: 100%;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperFilter = styled.View`
  width: 100%;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperButtonDateFilter = styled(TouchableOpacity)`
  gap: 8px;
  flex-direction: row;
  align-items: center;
  border: 1px;
  padding: 4px 8px 4px 12px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperButtonFilter = styled(TouchableOpacity)<{
  isActive: boolean;
}>`
  gap: 8px;
  flex-direction: row;
  align-items: center;
  border: 1px;
  padding: 4px 20px;
  border-radius: 100px;
  border-color: ${({ theme }) => theme.gray[300]};

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.gray[600]};
    `}
`;

export const WrapperEmpty = styled.View`
  z-index: 999999;
  position: absolute;
  top: 32px;
  align-self: center;
  width: 60%;
  gap: 8px;
  align-self: center;
  justify-self: center;
  padding: 24px 32px;
  border: 1px;
  border-radius: 4px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.gray[300]};
  background-color: ${({ theme }) => theme.gray[50]};
`;

export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[700]};
  text-align: center;
`;

export const DescriptionBold = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.gray[700]};
`;

export const WrapperModal = styled.View`
  height: ${RFPercentage(100)}px;
  padding: 0 24px;
`;

export const ButtonSelect = styled(TouchableOpacity)`
  width: 100%;
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const WrapperTooltip = styled.View`
  width: 220px;
  border: 1px;
  padding: 4px 12px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const WrapperTooltipInfo = styled.View``;

export const WrapperSkeleton = styled.View``;
export const WrapperSkeletonCard = styled.View`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
`;
