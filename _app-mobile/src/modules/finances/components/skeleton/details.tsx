import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useTheme } from 'styled-components/native';
import { Dimensions } from 'react-native';

import * as S from './skeleton.styles';

export const SKDetails = () => {
  const theme = useTheme();
  const width = Dimensions.get('window').width;

  return (
    <S.WrapperDetails>
      <ContentLoader
        speed={1}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 300`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="16" rx="4" width="20%" height="20" />
        <Rect x="68%" y="16" rx="4" width="20%" height="20" />
        <Rect x="0" y="55" rx="4" width="25%" height="20" />
        <Rect x="58%" y="55" rx="4" width="30%" height="20" />
        <Rect x="0" y="95" rx="4" width="30%" height="20" />
        <Rect x="58%" y="95" rx="4" width="30%" height="20" />
        <Rect x="0" y="135" rx="4" width="30%" height="20" />
        <Rect x="48%" y="135" rx="4" width="40%" height="20" />
        <Rect x="0" y="175" rx="4" width="30%" height="20" />
        <Rect x="68%" y="175" rx="4" width="20%" height="20" />
        <Rect x="0" y="215" rx="4" width="20%" height="20" />
        <Rect x="53%" y="215" rx="4" width="35%" height="20" />
      </ContentLoader>
    </S.WrapperDetails>
  );
};
