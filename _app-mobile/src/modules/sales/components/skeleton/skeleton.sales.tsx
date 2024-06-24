import ContentLoader, { Circle, Rect, Path } from 'react-content-loader/native';
import { Dimensions, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './skeleton.sales.styles';

const width = Dimensions.get('window').width;

const SkeletonSalesScreen = () => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <ContentLoader
        speed={1}
        width={width}
        height={60}
        viewBox={`0 0 ${width} 60`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="42%" height="50" />
        <Rect x="46%" y="0" rx="4" width="42%" height="50" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 300`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="87%" height="300" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 300`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="87%" height="300" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 300`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="87%" height="300" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 300`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="87%" height="300" />
      </ContentLoader>
    </S.Wrapper>
  );
};

export default SkeletonSalesScreen;
