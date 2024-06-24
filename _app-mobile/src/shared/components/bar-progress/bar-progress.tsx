import { forwardRef, memo } from 'react';

import { TBarProgressProps } from './bar-progress.types';

import * as S from './bar-progress.styles';

const BarProgress = ({ sizeWidth = 0.5 }: TBarProgressProps, ref: any) => {
  return (
    <S.Wrapper>
      {sizeWidth ? <S.WrapperBar sizeWidth={sizeWidth} /> : null}
    </S.Wrapper>
  );
};

export default memo(forwardRef(BarProgress));
