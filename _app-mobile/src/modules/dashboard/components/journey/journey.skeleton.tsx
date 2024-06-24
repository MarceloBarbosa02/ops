import ContentLoader, { Circle, Rect, Path } from 'react-content-loader/native';
import { Dimensions, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './journey.styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

const width = Dimensions.get('window').width;

const JourneySkeleton = () => {
  const theme = useTheme();

  return (
    <S.WrapperSkeleton>
      <ContentLoader
        speed={1}
        width={width}
        height={RFPercentage(44)}
        viewBox={`0 0 ${width} ${RFPercentage(44)}`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="88%" height="100%" />
      </ContentLoader>
    </S.WrapperSkeleton>
  );
};

export default JourneySkeleton;
