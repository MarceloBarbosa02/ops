import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  border-radius: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: 24px;
  margin-bottom: 32px;
  gap: 24px;
`;

export const WrapperLogo = styled.View`
  align-items: center;
  padding: 24px 0;
`;

export const WrapperInfo = styled.View`
  align-items: center;
  gap: 18px;
  margin-bottom: 12px;
`;
export const WrapperForm = styled.View`
  gap: 18px;
`;

export const WrapperEmailInfo = styled.View`
  padding: 8px 14px;
  background-color: ${({ theme }) => theme.gray[100]};
  border-radius: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperProductInfo = styled.View`
  padding: 16px;
  gap: 8px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const ImgProduct = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 8px;
`;
