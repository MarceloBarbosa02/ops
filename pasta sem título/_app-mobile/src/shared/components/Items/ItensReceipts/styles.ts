import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const TitleFirst = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_60};
`;
export const WrapperItem = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;
export const WrapperID = styled.View`
  gap: 4px;
  flex-direction: row;
  align-items: center;
`;
export const WrapperBadge = styled.View<{
  status: string;
}>`
  padding: 4px 12px;
  border-radius: 6px;
  border: 1px;

  ${({ status }) =>
    (status === "APPROVED" || status === "TRANSFERRED") &&
    css`
      border-color: ${({ theme }) => theme.colors.color_green_40};
      background-color: ${({ theme }) => theme.colors.color_green_10};
    `};

  ${({ status }) =>
    status === "LIQUIDATING" &&
    css`
      border-color: ${({ theme }) => theme.colors.color_blue_40};
      background-color: ${({ theme }) => theme.colors.color_blue_10};
    `};

  ${({ status }) =>
    status === "REFUSED" &&
    css`
      border-color: ${({ theme }) => theme.colors.color_orange_40};
      background-color: ${({ theme }) => theme.colors.color_orange_20};
    `};

  ${({ status }) =>
    status === "PENDING" &&
    css`
      border-color: ${({ theme }) => theme.colors.color_yellow_40};
      background-color: ${({ theme }) => theme.colors.color_yellow_10};
    `};

  ${({ status }) =>
    status === "REFUNDED" &&
    css`
      border-color: ${({ theme }) => theme.colors.color_blue_40};
      background-color: ${({ theme }) => theme.colors.color_blue_10};
    `};

  ${({ status }) =>
    (status === "RETURNED" ||
      status === "CANCELED" ||
      status === "SYSTEM_ERROR") &&
    css`
      border-color: ${({ theme }) => theme.colors.color_red_40};
      background-color: ${({ theme }) => theme.colors.color_red_10};
    `};

  ${({ status }) =>
    status === "CHARGEBACK" &&
    css`
      border-color: ${({ theme }) => theme.colors.color_purple_40};
      background-color: ${({ theme }) => theme.colors.color_purple_20};
    `};

  ${({ status }) =>
    status === "IN_REVIEW" &&
    css`
      border-color: ${({ theme }) => theme.colors.color_purple_40};
      background-color: ${({ theme }) => theme.colors.color_purple_20};
    `};
`;
export const TitleBadge = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ status: string }>`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};

  ${({ status }) =>
    (status === "APPROVED" || status === "TRANSFERRED") &&
    css`
      color: ${({ theme }) => theme.colors.color_green_40};
    `};

  ${({ status }) =>
    status === "LIQUIDATING" &&
    css`
      color: ${({ theme }) => theme.colors.color_blue_40};
    `};

  ${({ status }) =>
    status === "CANCELED" &&
    css`
      color: ${({ theme }) => theme.colors.color_red_40};
    `};

  ${({ status }) =>
    status === "REFUSED" &&
    css`
      color: ${({ theme }) => theme.colors.color_orange_40};
    `};

  ${({ status }) =>
    status === "PENDING" &&
    css`
      color: ${({ theme }) => theme.colors.color_yellow_40};
    `};

  ${({ status }) =>
    status === "CHARGEBACK" &&
    css`
      color: ${({ theme }) => theme.colors.color_purple_40};
    `};

  ${({ status }) =>
    status === "REFUNDED" &&
    css`
      color: ${({ theme }) => theme.colors.color_blue_40};
    `};

  ${({ status }) =>
    status === "SYSTEM_ERROR" &&
    css`
      color: ${({ theme }) => theme.colors.color_red_40};
    `};

  ${({ status }) =>
    status === "RETURNED" &&
    css`
      color: ${({ theme }) => theme.colors.color_red_40};
    `};

  ${({ status }) =>
    status === "IN_REVIEW" &&
    css`
      color: ${({ theme }) => theme.colors.color_purple_40};
    `};
`;
