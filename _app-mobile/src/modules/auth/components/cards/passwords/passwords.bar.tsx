import { Typography } from '@/shared/components';
import { useMemo } from 'react';
import { TStrengthBarProps } from './passwords.types';
import { testaStringContraRegex } from '@/shared/utils/regex';

import * as S from './passwords.styles';

export const PasswordsBar = ({ password = '' }: TStrengthBarProps) => {
  const minLength = 5;
  const maxLength = 8;

  const passWorld = useMemo(() => {
    if (password?.length === 0) {
      return 'Fraca';
    }
    if (password?.length <= minLength) {
      return 'Fraca';
    }
    if (password?.length > minLength && !testaStringContraRegex(password)) {
      return 'Média';
    }
    if (password?.length > maxLength && testaStringContraRegex(password)) {
      return 'Forte';
    }

    return 'Fraca';
  }, [password]);

  const passColor = useMemo(() => {
    if (passWorld === 'Fraca') {
      return 'danger';
    }
    if (passWorld === 'Média') {
      return 'yellow';
    }
    if (passWorld === 'Forte') {
      return 'success';
    }
  }, [passWorld]);

  return (
    <S.WrapperPassword>
      <S.WrapperBar>
        {Array(3)
          .fill('')
          .map((_, index) => (
            <S.WrapperParts key={index.toString()} passWorld={passWorld} />
          ))}
      </S.WrapperBar>
      <Typography
        title={`${passWorld}`}
        weight="bold"
        colorValue={passColor}
        variant="subtitle"
      />
    </S.WrapperPassword>
  );
};
