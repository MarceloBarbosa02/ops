import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Wrapper = styled.View`
  width: 100%;
  border: 1px;
  gap: 12px;
  margin: 16px 0 0;
  padding: 16px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_90};
`;

export const WrapperTop = styled.View`
  gap: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
  border-style: dashed;
  flex-direction: row;
  align-items: center;
`;

export const WrapperIcon = styled.View`
  padding: 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
`;
