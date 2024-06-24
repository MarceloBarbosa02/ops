import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-bottom: 24px;
`;
export const WrapperItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 0;
`;
export const WrapperCardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.button.orange[100]};
`;
export const WrapperTextGenerics = styled.Text`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.button.text.secondary};
  width: 85%;
`;
