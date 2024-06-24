import { router } from 'expo-router';

import { useContactStore } from '../../store/use-contact.store';
import { useFetchMe } from '@/shared';
import { useEffect, useState } from 'react';

export const useContact = () => {
  const { data: userData } = useFetchMe();
  const { type, setToggleType } = useContactStore((store) => {
    return {
      type: store.type,
      setToggleType: store.setToggleType,
    };
  });
  const [countdown, setCountdown] = useState('');
  const [updateStatus, setUpdateStatus] = useState(
    userData?.requestUpdateContact?.find((obj: any) => obj.type === type)
  );

  const updateCountdown = () => {
    const timeRemaining =
      ((updateStatus?.expireDate &&
        Math.floor(
          (new Date(updateStatus?.expireDate).getTime() -
            new Date().getTime()) /
            1000
        )) ||
        3600 * 24) - 1;
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    setCountdown(`${hours} horas e ${minutes} minutos`);
  };

  useEffect(() => {
    updateCountdown();
    setUpdateStatus(
      userData?.requestUpdateContact?.find((obj: any) => obj.type === type)
    );
    const timer = setInterval(() => {
      updateCountdown();
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectTypeContact = (item: 'PHONE' | 'EMAIL') => {
    setToggleType(item);
    if (item === 'PHONE') {
      router.push('/(private)/(modais)/contact-phone');
    } else {
      router.push('/(private)/(modais)/contact-email');
    }
  };

  const handleNavigationInitial = () => {
    router.push('/(private)/(stack)/update-profile');
  };

  return {
    type,
    userData,
    countdown,
    updateStatus,
    setToggleType,
    handleNavigationInitial,
    handleSelectTypeContact,
  };
};
