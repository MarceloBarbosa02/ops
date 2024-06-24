import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  gap: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
`;

export const WrapperInfo = styled.View`
  width: 90%;
`;
export const WrapperInfoDot = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
`;
export const Dot = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.gray[700]};
`;
export const TextSuporte = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
  width: 95%;
`;
