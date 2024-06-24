import { useMemo, useState } from 'react';
import { View } from 'react-native';

import { Typography } from '@/shared/components';
import { testaStringContraRegex } from '@/shared/utils';
import { StrengthBarProps } from '@/modules/auth/screens/sign-up/sign-up.types';

import { classNamesStylesBar, classNamesStylesText } from './passwords.styles';

export const PasswordsBar = ({ password = '' }: StrengthBarProps) => {
  const [score, setScore] = useState<number>(0);

  const minLength = 5;
  const maxLength = 8;

  const passWorld = useMemo(() => {
    if (password?.length === 0) {
      setScore(0);
      return 'Fraca';
    }
    if (password?.length <= minLength) {
      setScore(0);
      return 'Fraca';
    }
    if (password?.length > minLength && !testaStringContraRegex(password)) {
      setScore(1);
      return 'Média';
    }
    if (password?.length > maxLength && testaStringContraRegex(password)) {
      setScore(2);
      return 'Forte';
    }
    setScore(0);
    return 'Fraca';
  }, [password]);

  return (
    <View className="flex-row w-full -mt-3 gap-1 items-center">
      <View className="flex-auto h-[10px] rounded-full overflow-hidden">
        {Array(3)
          .fill('')
          .map((_, index) => (
            <View
              key={index.toString()}
              className={classNamesStylesBar({ passWorld, score })}
            />
          ))}
      </View>
      <Typography
        title={`${passWorld}`}
        weight="bold"
        className={classNamesStylesText({ passWorld, score })}
      />
    </View>
  );
};
