import { useBiometric } from '@/modules/validation-biometrics/store/use-biometrics.store';
import { EnumBiometryStatus } from '@/shared/enum';
import { useFetchMe } from '@/shared/queries';
import { router } from 'expo-router';
import { useMemo } from 'react';
import { useTheme } from 'styled-components/native';

export const useVerifyIdentity = () => {
  const theme = useTheme();
  const { data: userData } = useFetchMe();
  const { handleChangeNavigation } = useBiometric((store) => {
    return {
      handleChangeNavigation: store.handleChangeNavigation,
    };
  });

  const handleNavigation = () => {
    handleChangeNavigation('finance');
    router.navigate('/(private)/(stack)/biometrics');
  };

  const colorsFlag = {
    PENDING: theme.orange[600],
    CAPTURE: theme.blue[600],
    STORED_DOCUMENTS: theme.blue[600],
    SENT_DOCUMENTS: theme.blue[600],
    MEDIATION: theme.blue[600],
    APPROVED: theme.green[600],
    REFUSED: theme.red[600],
    ERROR: theme.red[600],
  };

  const msgBiometric = {
    PENDING: 'pendente',
    CAPTURE: 'em análise',
    STORED_DOCUMENTS: 'em análise',
    SENT_DOCUMENTS: 'em análise',
    MEDIATION: 'em análise',
    APPROVED: 'aprovada',
    REFUSED: 'reprovada',
    ERROR: 'reprovada',
  };

  const isDisabled = useMemo(() => {
    return (
      [
        EnumBiometryStatus.APPROVED,
        EnumBiometryStatus.MEDIATION,
        EnumBiometryStatus.SENT_DOCUMENTS,
        EnumBiometryStatus.STORED_DOCUMENTS,
        EnumBiometryStatus.CAPTURE,
      ].filter((item) => item === userData?.biometryStatus)?.length > 0
    );
  }, [userData?.biometryStatus]);

  const refused = userData?.biometryStatus === EnumBiometryStatus.REFUSED;
  const pendent = userData?.biometryStatus === EnumBiometryStatus.PENDING;

  return {
    refused,
    pendent,
    userData,
    colorsFlag,
    isDisabled,
    msgBiometric,
    handleNavigation,
  };
};
