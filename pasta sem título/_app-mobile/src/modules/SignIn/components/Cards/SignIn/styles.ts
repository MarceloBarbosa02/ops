import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  gap: 16px;
`;
export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.mediumX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_neutral_90};
  margin: 24px 0 18px;
`;
export const WrapperEmail = styled.View`
  width: 100%;
  margin: 16px 0 4px;
  flex-direction: row;
  padding: 8px 12px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.color_neutral_10};
  border: 1px;
  border-color: ${({ theme }) => theme.colors.color_neutral_30};
`;
export const WrapperLabel = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const WrapperInfo = styled.View`
  gap: 8px;
  width: 80%;
`;
export const WrapperFooter = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
`;
export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.medium};
  color: ${({ theme }) => theme.colors.color_neutral_100};
`;
export const TitleEmail = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.colors.color_neutral_70};
`;
export const TitleBtn = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 12px 0;
`;
export const WrapperButton = styled.View`
  width: 100%;
  height: 56px;
  margin: 16px;
`;
export const TitleForgotPassword = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.colors.color_blue_40};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.color_blue_40};
`;
export const ButtonForgotPassword = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 12px 0;
`;
