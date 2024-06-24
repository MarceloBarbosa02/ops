import { Pressable, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  padding: 0 16px;
`;

export const WrapperExtract = styled.View`
  width: 100%;
  gap: 8px;
  padding: 16px 24px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperFlag = styled.View<{ color?: string }>`
  padding: 4px 12px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.blue[600]};

  ${({ color }) =>
    color &&
    css`
      border-color: ${color};
    `}
`;

export const WrapperItem = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ButtonDetail = styled(Pressable)`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray[200]};
  padding: 12px 0;
  border-radius: 4px;
`;
export const WrapperDescription = styled.View`
  align-items: flex-end;
`;

export const TitleDescription = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ isCanceled?: boolean }>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[800]};

  ${({ isCanceled, theme }) =>
    isCanceled &&
    css`
      text-decoration: line-through;
      text-decoration-color: ${theme.gray[600]};
    `}
`;

export const TitleLabel = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ isCanceled?: boolean }>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.gray[800]};

  ${({ isCanceled, theme }) =>
    isCanceled &&
    css`
      text-decoration: line-through;
      text-decoration-color: ${theme.gray[600]};
    `}
`;
export const WrapperBtnCopy = styled(TouchableOpacity)``;
