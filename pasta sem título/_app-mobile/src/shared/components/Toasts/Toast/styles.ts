import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};

  border: 0.5px;
  border-color: ${({ theme }) => theme.colors.color_neutral_40};
  border-radius: 8px;
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const WrapperInfo = styled.View`
  width: 90%;
  gap: 4px;
  margin-left: 8px;
`;

export const WrapperButton = styled.View`
  width: 100%;
  margin-top: 12px;
  align-items: flex-end;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;

export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
  width: 85%;
`;
