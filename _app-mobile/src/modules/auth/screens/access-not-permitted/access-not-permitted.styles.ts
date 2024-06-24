import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  border-radius: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: 24px;
`;
export const Container = styled.View`
  flex: 1;
  padding: ${RFPercentage(2)}px 0;
`;
export const Content = styled.View`
  margin-top: 36px;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 24px;
  width: 100%;
  border: 1px;
  border-radius: 16px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
export const WrapperButton = styled.View`
  gap: 8px;
  margin: 4px 0 ${RFPercentage(3)}px;
`;
export const WrapperImg = styled.View`
  width: 100%;
  margin-top: 114px;
  align-items: center;
  justify-content: center;
`;
export const WrapperLogo = styled.View`
  align-items: center;
  padding: 24px 0;
`;
export const WrapperInfo = styled.View`
  align-items: center;
  padding: 16px 0 24px;
  gap: 18px;
  margin-bottom: 12px;
`;
