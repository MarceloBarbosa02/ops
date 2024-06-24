import { forwardRef, memo } from 'react';

import { IconAsterisk } from '@/shared/assets/components';

import * as S from './separator.styles';

const Separator = () => {
  return (
    <S.Wrapper>
      <S.WrapperParts />
      <IconAsterisk />
      <S.WrapperParts />
    </S.Wrapper>
  );
};

export default memo(forwardRef(Separator));
