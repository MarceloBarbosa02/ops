import styled, { css } from "styled-components/native";

export const Switch = styled.TouchableOpacity<{
  active?: boolean;
  isDefault?: boolean;
  color: string;
}>`
  width: 40px;
  height: 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.color_neutral_30};
  border-radius: 40px;
  align-items: flex-start;
  justify-content: center;

  ${({ active, color }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.color_blue_40};
      align-items: flex-end;
    `}

  ${({ isDefault }) =>
    isDefault &&
    css`
      background-color: ${({ theme }) => theme.colors.color_neutral_30};
      align-items: flex-end;
    `}
`;

export const SwitchCircle = styled.TouchableOpacity<{
  active?: boolean;
  isDefault?: boolean;
}>`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
  margin-left: 2.6px;

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.color_neutral_0};
      margin-right: 2.6px;
      margin-left: 0px;
    `}

  ${({ isDefault }) =>
    isDefault &&
    css`
      background-color: ${({ theme }) => theme.colors.color_neutral_10};
      align-items: flex-end;
    `}
`;

export const ActivityIndicator = styled.ActivityIndicator``;

export const WrapperLoading = styled.View`
  width: 40px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
