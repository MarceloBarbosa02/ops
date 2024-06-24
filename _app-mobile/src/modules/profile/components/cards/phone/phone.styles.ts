import styled from 'styled-components/native';

export const WrapperCard = styled.View`
  gap: 8px;
  padding: 16px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
`;
export const WrapperCardHeader = styled.View`
  gap: 4px;
`;

export const WrapperCardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.gray[100]};
`;
export const WrapperPhoneButtons = styled.View`
  gap: 16px;
  margin: 24px 0;
`;
export const WrapperTextPhone = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
`;

export const WrapperTextPhoneInfo = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
  width: 90%;
`;
