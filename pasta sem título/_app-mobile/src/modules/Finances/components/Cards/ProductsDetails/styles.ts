import { TouchableOpacity, Image } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  margin-top: 12px;
  gap: 12px;
  padding: 12px 0;
  flex-direction: row;
`;

export const WrapperImageInfo = styled.View`
  height: 100%;
  width: 28%;
  align-items: center;
  justify-content: center;
`;

export const WrapperInfo = styled.View`
  flex: 2;
  gap: 12px;
  flex-direction: row;
`;

export const WrapperInfoText = styled.View<{ isSpacing: boolean }>`
  flex: 2;
  gap: 4px;
  justify-content: space-evenly;

  ${({ isSpacing }) =>
    isSpacing &&
    css`
      justify-content: center;
    `}
`;

export const WrapperDescription = styled.View`
  flex: 1;
  justify-content: center;
`;

export const WrapperValueProduct = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperValue = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 0;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.color_neutral_0};
`;

export const WrapperFormat = styled.View`
  gap: 4px;
  flex-direction: row;
  align-items: center;
`;

export const WrapperSizeImg = styled.View`
  width: 90px;
  height: 90px;
  align-items: center;
  justify-content: center;
`;

export const ImgProduct = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l700_d200};
`;
export const TitleProduct = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  width: 70%;
`;
export const TitleValueProduct = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  margin-left: 8px;
`;
export const DescriptionLine = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  /* width: 65%; */
  z-index: -1000;
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.gray_l900_d50};
  text-align: justify;
  width: 65%;
`;
export const ButtonPlus = styled(TouchableOpacity)``;
export const DescriptionPlus = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.blue_l400_d500};
`;
