import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  padding: 16px;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_20};
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const WrapperFlag = styled.View`
  padding: 6px 10px;
  gap: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-style: dashed;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const WrapperTop = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const TitleFlag = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const WrapperProgressBack = styled.View`
  width: 100%;
  height: 8px;
  padding: 2px;
  margin-top: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.color_neutral_20};
  flex-direction: row;
  align-items: center;
`;
export const WrapperProgressBar = styled.View<{ width: number }>`
  width: ${({ width }) => width}%;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const WrapperProgress = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperProgressHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ProgressText = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
