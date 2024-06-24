import { RFPercentage } from 'react-native-responsive-fontsize';
import { Image, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  margin-top: 16px;
`;

// Product
export const WrapperCardProduct = styled.View`
  flex: 1;
  margin-top: 12px;
  gap: 12px;
  padding: 0 ${RFPercentage(2)}px;
  flex-direction: row;
`;
export const WrapperImageInfo = styled.View`
  height: 100%;
  width: 28%;
  align-items: center;
  justify-content: center;
`;
export const WrapperSizeImgProduct = styled.View`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
`;
export const ImgProduct = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

//Customer
export const WrapperCustomer = styled.View`
  width: 100%;
  padding: 0 ${RFPercentage(2)}px;
`;

export const WrapperHeader = styled.View`
  padding: 0 ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.gray[700]};
`;
export const Quantity = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.small}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[900]};
`;
// export const ImgProduct = styled(Image)`
//   width: 56px;
//   height: 56px;
//   border-radius: 8px;
// `;

export const WrapperProduct = styled.View`
  flex: 1;
  margin-top: 12px;
  gap: 12px;
  padding: 0 ${RFPercentage(2)}px;
  flex-direction: row;
`;

// export const WrapperImageInfo = styled.View`
//   height: 100%;
//   width: 28%;
//   align-items: center;
//   justify-content: center;
// `;

export const WrapperInfo = styled.View`
  flex: 2;
  gap: 12px;
  flex-direction: row;
`;

export const WrapperInfoAffiliate = styled.View``;

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
export const ButtonPlus = styled(TouchableOpacity)``;

export const Label = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.regular};
  color: ${({ theme }) => theme.gray[500]};
`;

export const WrapperItemLine = styled.View<{ type: string }>`
  width: 100%;
  padding: ${RFPercentage(1)}px 0;

  ${({ type }) =>
    type === 'marketing' &&
    css`
      align-items: center;
      flex-direction: row;
    `}
`;
export const LabelItemLine = styled.Text.attrs({
  maxFontSizeMultiplier: 1.1,
})<{ type: string }>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.sizes.smallX}px;
  font-family: ${({ theme }) => theme.fonts.Satoshi.bold};
  color: ${({ theme }) => theme.gray[700]};

  ${({ type }) =>
    type === 'marketing' &&
    css`
      width: 45%;
    `}
`;

// transaction
export const WrapperLink = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperHeaderTransaction = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// marketing
export const WrapperMarketing = styled.View`
  width: 100%;
  padding: ${RFPercentage(1)}px ${RFPercentage(2)}px ${RFPercentage(4)}px;
`;
export const WrapperTable = styled.View`
  width: 100%;
  align-items: center;
  border: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.gray[200]};
`;

export const WrapperTableHeader = styled.View`
  width: 100%;
  padding: 16px;
  gap: 8px;
  flex-direction: row;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ theme }) => theme.gray[100]};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.gray[200]};
`;

export const WrapperTableLine = styled.View<{ last?: boolean }>`
  width: 100%;
  padding: 8px 16px;
  border-bottom-width: ${({ last }) => (last ? 0 : 1)}px;
  border-color: ${({ theme }) => theme.gray[200]};
`;

//action Manual
export const Container = styled.View`
  width: 100%;
  min-height: 200px;
  padding: 0 ${RFPercentage(2)}px;
`;
export const WrapperAction = styled.View`
  width: 100%;
  padding: ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px;
  border-style: dashed;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.gray[300]};
  background-color: ${({ theme }) => theme.gray[100]};
`;
export const WrapperCard = styled.View`
  width: 100%;
  gap: 8px;
`;
export const WrapperInfoCard = styled.View`
  gap: 4px;
`;
export const WrapperFooter = styled.View`
  width: 100%;
  align-items: flex-end;
`;
export const WrapperButtons = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
