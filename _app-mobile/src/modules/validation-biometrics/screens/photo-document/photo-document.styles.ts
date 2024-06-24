import { TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0 42px;
`;

export const Items = styled.View`
  padding: 24px;
  gap: 6px;
`;
export const WrapperHeader = styled.View`
  width: 100%;
  gap: 12px;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
`;
export const WrapperFooter = styled.View`
  width: 100%;
  padding: 0 24px 16px;
  margin-bottom: 32px;
  height: 64px;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;
export const WrapperButton = styled.View`
  width: 100%;
  height: ${RFPercentage(6)}px;
`;
export const WrapperButtons = styled.View`
  width: 100%;
  gap: 24px;
  padding: 24px 0 648px;
`;
export const WrapperButtonsAccept = styled.View`
  width: 100%;
  margin-top: 48px;
  flex-direction: row;
  gap: 8px;
`;
export const WrapperContent = styled.View`
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding: 24px;
  /* border: 1px; */
  border-radius: 8px;
`;
export const BtnLink = styled(TouchableOpacity)`
  margin-top: -3px;
`;
export const WrapperInfo = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
export const WrapperDescription = styled.View`
  align-items: center;
  justify-content: center;
  padding: 4px;
  border: 1px;
  border-radius: 6px;
  margin-top: 16px;
`;
export const BtnFlag = styled.View`
  width: 100%;
  height: 48px;
`;
export const ImgPreview = styled(Image)`
  width: 100%;
  height: 100%;
`;
export const WrapperPreview = styled.View`
  width: 70%;
  height: ${RFPercentage(56)}px;
  border-radius: 4px;
  overflow: hidden;
`;
export const WrapperDefault = styled.View`
  width: 55%;
  height: ${RFPercentage(42)}px;
  border-radius: 20px;
  overflow: hidden;
`;
export const ImgDefault = styled(Image)`
  width: 100%;
`;
export const WrapperHeading = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
