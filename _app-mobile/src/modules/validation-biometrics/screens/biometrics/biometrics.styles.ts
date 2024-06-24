import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding: 24px 0;
`;

export const WrapperItem = styled.View`
  width: 90%;
  align-items: center;
  gap: 12px;
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
export const Items = styled.View`
  padding: 24px;
  gap: 12px;
`;
export const WrapperHeader = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 36px;
  gap: 36px;
`;
export const WrapperFooter = styled.View`
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`;
export const WrapperContent = styled.View`
  flex: 1;
  gap: 16px;
  padding: 36px 0;
  align-items: center;
  justify-content: space-between;
`;
export const BtnLink = styled(TouchableOpacity)`
  margin-top: -3px;
`;
export const WrapperInfo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
  margin-top: 12px;
`;
export const Description = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
  text-align: center;
`;
