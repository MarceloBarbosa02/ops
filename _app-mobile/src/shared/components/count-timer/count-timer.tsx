import { forwardRef, memo } from 'react';

import { Button } from '../button';
import { Typography } from '../typography';

import { useCountTimer } from './use-count-timer';
import { TCountTimerProps } from './count-timer.types';

import * as S from './count-timer.styles';

const CountTimerCard = (props: TCountTimerProps, ref: any) => {
  const { title, isLoading, isShowCount, secondsStart, handleSendAgain } =
    useCountTimer({
      ...props,
    });

  return (
    <S.Wrapper>
      {isShowCount && (
        <Typography
          title={`${title} em 00:${secondsStart}`}
          colorValue="neutral-medium"
          size="large"
          variant="subtitle"
        />
      )}

      {!isShowCount && (
        <S.WrapperButton>
          <Button
            title={title}
            variant="link"
            isLoading={isLoading}
            onPress={handleSendAgain}
            textWeightButton="regular"
          />
        </S.WrapperButton>
      )}
    </S.Wrapper>
  );
};

export default CountTimerCard;
