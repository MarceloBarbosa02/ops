import ContentLoader, { Rect } from 'react-content-loader/native';
import { Dimensions } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './summary.styles';

const width = Dimensions.get('window').width;

const SummarySkeleton = () => {
  const theme = useTheme();

  return (
    <S.WrapperSkeleton>
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
        height={60}
        viewBox={`0 0 ${width} 60`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="1" y="0" rx="4" width="88%" height="50" />
      </ContentLoader>

      <ContentLoader
        speed={1}
        width={width}
        height={60}
        viewBox={`0 0 ${width} 60`}
        backgroundColor={theme.gray[300]}
        foregroundColor="silver"
        opacity={0.6}>
        <Rect x="1" y="0" rx="4" width="42%" height="52" />
        <Rect x="45.8%" y="0" rx="4" width="42%" height="52" />
      </ContentLoader>
    </S.WrapperSkeleton>
  );
};

export default SummarySkeleton;
