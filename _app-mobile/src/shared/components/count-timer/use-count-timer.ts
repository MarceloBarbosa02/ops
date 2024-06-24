import { useEffect, useMemo, useState } from 'react';
import { useTimer } from 'react-timer-hook';

import { TCountTimerProps } from './count-timer.types';

export const useCountTimer = ({
  onSubmit,
  title = 'Reenviar e-mail',
  isStart = true,
}: TCountTimerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowCount, setIsShowCount] = useState<boolean>(isStart);

  const getSeconds = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 45);
    return time;
  };

  const { seconds, restart } = useTimer({
    expiryTimestamp: getSeconds(),
    autoStart: true,
  });

  const secondsStart = useMemo(() => {
    return seconds < 10 ? `0${seconds}` : seconds;
  }, [seconds]);

  const handleSendAgain = async () => {
    setIsLoading(true);
    await onSubmit()
      .then(() => {
        setIsShowCount(true);
        restart(getSeconds());
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (seconds === 0) {
      setIsShowCount(false);
    }
  }, [seconds]);

  return {
    title,
    isShowCount,
    seconds,
    isLoading,
    secondsStart,
    handleSendAgain,
  };
};
