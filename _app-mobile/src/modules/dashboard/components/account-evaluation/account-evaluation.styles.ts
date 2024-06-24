import { TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  padding: ${RFPercentage(2)}px;
  border: 1px;
  gap: 8px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperRating = styled.View`
  width: 100%;
  margin: 8px 0;
  height: 14px;
  align-items: center;
  justify-content: center;
  gap: 2px;
  flex-direction: row;
  border-radius: 2px;

  /* background-color: ${({ theme }) => theme.gray[100]}; */
`;

export const WrapperRatingParts = styled.View<{
  color: string;
  isActive: boolean;
  isComplete: boolean;
  index: number;
}>`
  width: 24%;
  height: 8px;
  background-color: ${({ color }) => color};

  ${({ isActive }) =>
    !isActive &&
    css`
      opacity: 0.3;
    `}

  ${({ isComplete }) =>
    !isComplete &&
    css`
      opacity: 1;
    `}

    ${({ index }) =>
    index === 1 &&
    css`
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    `}

  ${({ index }) =>
    index === 4 &&
    css`
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    `}
`;

export const WrapperInfo = styled.View`
  width: 100%;
  align-items: flex-start;
  margin-left: 8px;
`;

export const WrapperLink = styled.View<{ align: string }>`
  width: 100%;
  gap: 4px;
  align-items: center;
  justify-content: ${({ align }) => align};
  flex-direction: row;
`;

export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.gray[700]};
  text-align: center;
`;

export const DescriptionBold = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ color: string }>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ color }) => color};
`;

export const ButtonLink = styled(TouchableOpacity)``;
export const WrapperInfoValuation = styled.View`
  width: 100%;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;
export const WrapperButtons = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonOption = styled.View`
  gap: 4px;
  width: 48%;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
export const WrapperEmpty = styled.View`
  width: 100%;
  padding: 0 16px;
  align-items: center;
`;
export const WrapperEmptyIcon = styled.View`
  padding: 0 12px;
`;
export const EmptyDescription = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.gray[700]};
  text-align: center;
`;

export const EmptyDescriptionBold = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ color: string }>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ color }) => color};
`;
