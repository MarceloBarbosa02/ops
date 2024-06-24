import { TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  /* height: 2900px; */
  width: 100%;
  height: 100%;
  gap: 24px;
`;
export const WrapperButton = styled.View`
  padding: 0 ${RFPercentage(2.6)}px;
`;

export const WrapperDetails = styled.View`
  width: 100%;
  gap: 16px;
  padding: 0 0 56px;
`;

export const WrapperFilters = styled.View`
  width: 100%;
  height: 100%;
  gap: 16px;
  padding: 0 0 16px;
  justify-content: space-between;
`;
export const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export const WrapperInfo = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const WrapperHeaderIcon = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperTitle = styled.View`
  gap: 8px;
  padding: ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.gray[50]};
`;

export const Line = styled.View`
  width: 92%;
  align-self: center;
  height: 1px;
  margin: 24px 0;
  background-color: ${({ theme }) => theme.gray[300]};
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.gray[500]};
`;
export const TitleCode = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  color: ${({ theme }) => theme.gray[800]};
`;
export const WrapperBtnClose = styled(TouchableOpacity)``;
export const WrapperBtnCopy = styled(TouchableOpacity)``;
