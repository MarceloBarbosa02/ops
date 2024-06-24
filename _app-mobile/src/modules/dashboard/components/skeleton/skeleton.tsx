import ContentLoader, { Circle, Rect, Path } from 'react-content-loader/native';
import { Dimensions, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './skeleton.styles';

const width = Dimensions.get('window').width;

const SkeletonScreen = () => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <View>
        <ContentLoader
          speed={1}
          width={width}
          height={40}
          viewBox={`0 0 ${width} 40`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="1" y="7" rx="4" width="15%" height="20" />
          <Rect x="74" y="7" rx="4" width="6%" height="20" />
        </ContentLoader>

        <S.WrapperHeader>
          <ContentLoader
            speed={1}
            width={width}
            height={80}
            viewBox={`0 0 ${width} 80`}
            backgroundColor={theme.gray[300]}
            foregroundColor="silver"
            opacity={0.6}
          >
            <Rect x="3%" y="14" rx="4" width="20%" height="20" />
            <Rect x="3%" y="45" rx="4" width="15%" height="20" />

            <Rect x="64%" y="14" rx="4" width="20%" height="20" />
            <Rect x="69%" y="45" rx="4" width="15%" height="20" />
          </ContentLoader>
        </S.WrapperHeader>

        <S.WrapperLine>
          <S.WrapperItem>
            <ContentLoader
              speed={1}
              width={width}
              height={80}
              viewBox={`0 0 ${width} 80`}
              backgroundColor={theme.gray[300]}
              foregroundColor="silver"
              opacity={0.6}
            >
              <Rect x="3%" y="14" rx="4" width="20%" height="20" />
              <Rect x="3%" y="45" rx="4" width="15%" height="20" />
            </ContentLoader>
          </S.WrapperItem>

          <S.WrapperItem>
            <ContentLoader
              speed={1}
              width={width}
              height={80}
              viewBox={`0 0 ${width} 80`}
              backgroundColor={theme.gray[300]}
              foregroundColor="silver"
              opacity={0.6}
            >
              <Rect x="3%" y="14" rx="4" width="20%" height="20" />
              <Rect x="3%" y="45" rx="4" width="15%" height="20" />
            </ContentLoader>
          </S.WrapperItem>
        </S.WrapperLine>
      </View>

      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={80}
          viewBox={`0 0 ${width} 80`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="3%" y="20" rx="4" width="40%" height="20" />
          <Rect x="65%" y="14" rx="4" width="18%" height="30" />
        </ContentLoader>
        <ContentLoader
          speed={1}
          width={width}
          height={110}
          viewBox={`0 0 ${width} 110`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="3%" y="10" rx="4" width="24%" height="24%" />
          <Rect x="31%" y="10" rx="4" width="24%" height="24%" />
          <Rect x="59%" y="10" rx="4" width="24%" height="24%" />
        </ContentLoader>
        <ContentLoader
          speed={1}
          width={width}
          height={110}
          viewBox={`0 0 ${width} 110`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="3%" y="10" rx="4" width="24%" height="24%" />
          <Rect x="31%" y="10" rx="4" width="24%" height="24%" />
          <Rect x="59%" y="10" rx="4" width="24%" height="24%" />
        </ContentLoader>
        <ContentLoader
          speed={1}
          width={width}
          height={50}
          viewBox={`0 0 ${width} 50`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="38%" y="10" rx="4" width="10%" height="40%" />
        </ContentLoader>
      </S.WrapperCard>

      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={80}
          viewBox={`0 0 ${width} 80`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="4%" y="20" rx="4" width="40%" height="20" />
        </ContentLoader>

        <ContentLoader
          speed={1}
          width={width}
          height={100}
          viewBox={`0 0 ${width} 100`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="12%" y="4%" rx="4" width="65%" height="25" />
          <Rect x="22%" y="30%" rx="4" width="45%" height="25" />
        </ContentLoader>

        <ContentLoader
          speed={1}
          width={width}
          height={50}
          viewBox={`0 0 ${width} 50`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="12%" y="4%" rx="4" width="65%" height="15" />
        </ContentLoader>
      </S.WrapperCard>

      <S.WrapperCard>
        <ContentLoader
          speed={1}
          width={width}
          height={60}
          viewBox={`0 0 ${width} 60`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="4%" y="20" rx="4" width="40%" height="20" />
        </ContentLoader>

        <ContentLoader
          speed={1}
          width={width}
          height={50}
          viewBox={`0 0 ${width} 50`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="4%" y="4%" rx="4" width="20%" height="35" />
          <Rect x="30%" y="4%" rx="4" width="20%" height="35" />
          <Rect x="60%" y="4%" rx="4" width="20%" height="35" />
        </ContentLoader>

        <ContentLoader
          speed={1}
          width={width}
          height={120}
          viewBox={`0 0 ${width} 120`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}
        >
          <Rect x="4%" y="4%" rx="400" width="20%" height="80" />
          <Rect x="30%" y="4%" rx="400" width="20%" height="80" />
          <Rect x="60%" y="4%" rx="400" width="20%" height="80" />
        </ContentLoader>
      </S.WrapperCard>
    </S.Wrapper>
  );
};

export default SkeletonScreen;
