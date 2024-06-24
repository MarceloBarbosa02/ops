import { TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const ConfirmationArea = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  align-items: flex-end;
  background-color: ${({ theme: t }) => t.colors.color_neutral_0};
  border-top-color: ${({ theme: t }) => t.colors.color_neutral_20};
  border-top-width: 0.7px;
`;

export const ContentConfirmationArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px ${RFPercentage(3)}px;
  gap: 8px;
`;

export const CancelButton = styled.TouchableOpacity`
  padding: 6px 18px;
`;

export const SaveButton = styled(TouchableOpacity)<{ color: string }>`
  border-radius: 8px;
  padding: 12px 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;

  ${({ disabled, color }) =>
    disabled
      ? css`
          background-color: ${({ theme: t }) => t.colors.color_neutral_30};
        `
      : css`
          background-color: ${color};
        `}
`;

const TexButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-weight: 700;
`;

export const TextButtonCancel = styled(TexButton)<{ disable?: boolean }>`
  color: ${({ theme }) => theme.colors.color_neutral_30};

  ${({ disabled }) =>
    disabled
      ? css`
          color: ${({ theme: t }) => t.colors.color_neutral_30};
        `
      : css`
          color: ${({ theme: t }) => t.colors.color_neutral_80};
        `}
`;

export const TextButtonSave = styled(TexButton)`
  color: #fdfdfd;
`;

export const WrapperLoading = styled.View`
  width: 34%;
`;
