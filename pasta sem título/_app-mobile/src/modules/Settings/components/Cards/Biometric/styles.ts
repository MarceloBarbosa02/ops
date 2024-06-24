import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 0 ${RFPercentage(3)}px ${RFPercentage(3)}px;
`;

export const Wrapper = styled.View`
  width: 100%;
  padding: ${RFPercentage(3)}px;

  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray_l300_d600};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperInfo = styled.View`
  width: 100%;
  padding: 8px 0 24px;
`;
export const WrapperFlag = styled.View<{ color: string }>`
  gap: 4px;
  padding: 4px 8px;
  flex-direction: row;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ color }) => color};
  background-color: ${({ theme }) => theme.colors.opacity_d100};
`;
