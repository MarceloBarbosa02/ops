import ContentLoader, { Circle, Rect, Path } from 'react-content-loader/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Dimensions, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './skeleton.styles';

const width = Dimensions.get('window').width;

export const SKFinance = () => {
  const theme = useTheme();

  return (
    <S.WrapperSkeleton>
      <View>
        <ContentLoader
          speed={1}
          width={width}
          height={28}
          viewBox={`0 0 ${width} 28`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}>
          <Rect x="1" y="0" rx="4" width="11%" height="15" />
          <Rect x="13%" y="0" rx="4" width="5%" height="15" />
        </ContentLoader>

        <ContentLoader
          speed={1}
          width={width}
          height={65}
          viewBox={`0 0 ${width} 65`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}>
          <Rect x="1" y="0" rx="4" width="88%" height="50" />
        </ContentLoader>

        <ContentLoader
          speed={1}
          width={width}
          height={65}
          viewBox={`0 0 ${width} 65`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}>
          <Rect x="1" y="0" rx="4" width="88%" height="50" />
        </ContentLoader>

        <ContentLoader
          speed={1}
          width={width}
          height={65}
          viewBox={`0 0 ${width} 65`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}>
          <Rect x="1" y="0" rx="4" width="88%" height="50" />
        </ContentLoader>

        <ContentLoader
          speed={1}
          width={width}
          height={65}
          viewBox={`0 0 ${width} 65`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}>
          <Rect x="1" y="0" rx="4" width="88%" height="50" />
        </ContentLoader>
      </View>

      <View>
        <ContentLoader
          speed={1}
          width={width}
          height={35}
          viewBox={`0 0 ${width} 35`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}>
          <Rect x="1" y="0" rx="4" width="40%" height="20" />
        </ContentLoader>

        <ContentLoader
          speed={1}
          width={width}
          height={RFPercentage(30)}
          viewBox={`0 0 ${width} ${RFPercentage(30)}`}
          backgroundColor={theme.gray[300]}
          foregroundColor="silver"
          opacity={0.6}>
          <Rect x="1" y="0" rx="4" width="88%" height="100%" />
        </ContentLoader>
      </View>

      <ContentLoader
        speed={1}
        width={width}
        height={95}
        viewBox={`0 0 ${width} ${95}`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="1" y="20" rx="4" width="88%" height="60" />
      </ContentLoader>
    </S.WrapperSkeleton>
  );
};
