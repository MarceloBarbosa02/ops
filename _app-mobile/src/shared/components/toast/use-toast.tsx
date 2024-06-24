import { useCallback } from 'react';
import { Linking } from 'react-native';

import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/shared/assets';

import { TToast } from './toast.types';
import { useToastStore } from './use-toast-store';

export const useToast = () => {
  const { hideToast } = useToastStore((store) => {
    return {
      hideToast: store.hideToast,
    };
  });

  const getTypeIcon = (type: TToast) => {
    switch (type) {
      case 'success':
        return <SuccessIcon />;
      case 'error':
        return <ErrorIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'info':
        return <InfoIcon />;

      default:
        return;
    }
  };

  const handleOpenSettings = useCallback(async (id: string) => {
    hideToast(id);
    await Linking.openSettings();
  }, []);

  return {
    getTypeIcon,
    handleOpenSettings,
  };
};
