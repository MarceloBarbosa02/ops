import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const Wrapper = styled.View`
  width: 100%;
  border: 1px;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.gray[300]};
`;

export const WrapperItems = styled.View`
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const WrapperItem = styled.View`
  align-items: center;
`;

export const WrapperItemBar = styled.View`
  align-items: center;
  justify-content: center;
  z-index: -99999;
`;

export const WrapperItemInfo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  z-index: 0;
`;

export const WrapperTop = styled.View``;
export const WrapperDot = styled.View<{
  marginTop: number;
  marginRight: number;
}>`
  width: 40px;
  height: 40px;
  border: 5px;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
  position: absolute;
  top: ${({ marginTop }) => marginTop}px;
  right: ${({ marginRight }) => marginRight}px;
  border-radius: 60px;
  border-color: ${({ theme }) => theme.gray[50]};
  background-color: ${({ theme }) => theme.gray[300]};
`;
