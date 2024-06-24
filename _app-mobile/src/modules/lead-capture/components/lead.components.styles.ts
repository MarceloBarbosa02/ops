import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 0 ${RFPercentage(2.6)}px;
  justify-content: space-between;
`;
export const Container = styled.View`
  width: 100%;
  border-radius: 8px;
  border: 1px;
  border-color: ${({ theme }) => theme.gray[300]};
  padding: 24px;
  margin-top: ${RFPercentage(6)}px;
`;
export const Content = styled.View`
  flex: 1;
  padding: 0 ${RFPercentage(2)}px 0;
`;
export const WrapperButton = styled.View`
  padding: ${RFPercentage(2)}px ${RFPercentage(3)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.gray[100]};
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
  padding: 24px 0 0;
  gap: 12px;
`;
export const WrapperLater = styled.View`
  align-items: flex-end;
  width: 100%;
  margin: 24px 0;
`;
export const WrapperOptions = styled.View`
  gap: 24px;
  margin-top: 24px;
`;
export const WrapperOptionsOther = styled.View``;
export const WrapperProgress = styled.View`
  width: 100%;
  gap: 8px;
  margin: 0 0 ${RFPercentage(1)}px;
`;

export const WrapperProgressInfo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperProgressSteps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperProgressDuration = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
