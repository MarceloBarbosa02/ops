import ContentLoader, { Rect } from 'react-content-loader/native';
import { Dimensions } from 'react-native';
import { useTheme } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import * as S from './sales-conversion.styles';

const width = Dimensions.get('window').width;

const SalesConversionSkeleton = () => {
  const theme = useTheme();

  return (
    <S.WrapperSkeleton>
      <ContentLoader
        speed={1}
        width={width}
        height={RFPercentage(20)}
        viewBox={`0 0 ${width} ${RFPercentage(20)}`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="0" y="0" rx="4" width="88%" height="100%" />
      </ContentLoader>
    </S.WrapperSkeleton>
  );
};

export default SalesConversionSkeleton;
