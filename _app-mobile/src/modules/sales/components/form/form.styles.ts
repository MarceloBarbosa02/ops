import { TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  padding: 16px;
  width: 100%;
`;

export const WrapperFormHeader = styled.View`
  padding: 8px ${RFPercentage(2)}px;
  width: 100%;
  gap: 16px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.gray[800]};
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
  border-color: ${({ theme }) => theme.gray[300]};
`;
export const ItemsOrigin = styled.View<{ index: number }>`
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: ${RFPercentage(2)}px;

  ${({ index }) =>
    index === 0 &&
    css`
      border-top-width: 0;
    `};
`;
export const BtnAll = styled(TouchableOpacity)``;
export const AllText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  color: ${({ theme }) => theme.blue[400]};
`;
export const WrapperUTM = styled.View`
  margin-top: 12px;
  border: 1px;
  border-radius: 4px;
  overflow: hidden;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperItem = styled.View<{ index: number }>`
  width: 100%;
  gap: 8px;
  padding: ${RFPercentage(2)}px;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.gray[300]};

  ${({ index }) =>
    index === 0 &&
    css`
      border-top-width: 0;
    `};
`;

export const WrapperItemInput = styled.View`
  width: 100%;
  padding: 0 8px;
`;
export const WrapperButtonCalendar = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
