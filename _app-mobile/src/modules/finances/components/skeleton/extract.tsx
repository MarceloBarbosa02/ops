import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useTheme } from 'styled-components/native';
import { Dimensions } from 'react-native';

import * as S from './skeleton.styles';

export const SKExtract = () => {
  const theme = useTheme();
  const width = Dimensions.get('window').width;

  return (
    <S.Wrapper>
      <ContentLoader
        speed={1}
        width={width}
        height={170}
        viewBox={`0 0 ${width} 170`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="82%" height="100%" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={170}
        viewBox={`0 0 ${width} 170`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="82%" height="100%" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={170}
        viewBox={`0 0 ${width} 170`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="82%" height="100%" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={170}
        viewBox={`0 0 ${width} 170`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="82%" height="100%" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={170}
        viewBox={`0 0 ${width} 170`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="82%" height="100%" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={170}
        viewBox={`0 0 ${width} 170`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="82%" height="100%" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={170}
        viewBox={`0 0 ${width} 170`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="82%" height="100%" />
      </ContentLoader>
    </S.Wrapper>
  );
};
