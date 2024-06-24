import ContentLoader, { Circle, Rect, Path } from 'react-content-loader/native';
import { Dimensions, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import * as S from './plus-settings.styles';

const width = Dimensions.get('window').width;

export const CardPlusSkeleton = () => {
  const theme = useTheme();

  return (
    <S.WrapperSkeleton>
      <ContentLoader
        speed={1}
        width={width}
        height={54}
        viewBox={`0 0 ${width} ${54}`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="6" rx="99" width="42" height="42" />

        <Rect x="65" y="0" rx="4" width="36" height="25" />
        <Rect x="65" y="32" rx="4" width="45%" height="18" />

        <Rect x="70%" y="6" rx="99" width="42" height="42" />
      </ContentLoader>
    </S.WrapperSkeleton>
  );
};
