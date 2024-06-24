import { Pressable } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  padding: 0 16px;
`;

export const WrapperExtract = styled.View`
  width: 100%;
  gap: 8px;
  padding: 16px ${RFPercentage(2.6)}px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
`;

export const WrapperFlag = styled.View<{ color?: string }>`
  margin: 4px 0;
  padding: 4px 12px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.blue_l600_d300};

  ${({ color }) =>
    color &&
    css`
      border-color: ${color};
    `}
`;

export const TextFlag = styled.Text<{ color?: string }>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.blue_l600_d300};

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l800_d100};
`;

export const TitleButton = styled.Text`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l800_d100};
`;

export const ButtonDetail = styled(Pressable)`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_l200_d700};
  padding: 12px 0;
  border-radius: 4px;
`;

export const WrapperDescription = styled.View`
  width: 87%;
  align-items: flex-end;
`;

export const TitleDescription = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l800_d100};
`;

export const TitleLabel = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l800_d100};
`;
