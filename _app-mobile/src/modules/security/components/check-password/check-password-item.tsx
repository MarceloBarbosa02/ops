import React from 'react';

// import CheckFalse from '@/shared/assets/icons/svg/login/check_false.svg';
// import CheckTrue from '@/shared/assets/icons/svg/login/check_true.svg';
import { Typography } from '@/shared/components';

import * as S from './check-password.styles';

interface CheckPasswordProps {
  title: string;
  active: boolean;
}

export const CheckPasswordItem = ({
  title,
  active = false,
}: CheckPasswordProps) => {
  return (
    <S.Wrapper>
      {/* {active ? <CheckTrue /> : <CheckFalse />} */}
      <Typography title={title} />
    </S.Wrapper>
  );
};
