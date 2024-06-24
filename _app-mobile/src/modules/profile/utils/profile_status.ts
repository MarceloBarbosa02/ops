import { EnumVerificationStatus } from '@/shared/enum';
import { TVerificationStatus } from '@/shared/queries/user/sign-in.types';

export type TVariantStatus = 'success' | 'warning' | 'primary' | 'danger';

type ProfileStatus = {
  label: string;
  variant: TVariantStatus;
  tooltip: string;
};

export const getProfileStatus = (
  status: TVerificationStatus
): ProfileStatus => {
  switch (status) {
    case EnumVerificationStatus.PENDING_DATA:
      return {
        label: 'Dados pendentes',
        variant: 'warning',
        tooltip: 'Preencha dados para iniciar a verificação de dados',
      };
    case EnumVerificationStatus.VERIFIED_DATA:
      return {
        label: 'Dados verificados',
        variant: 'success',
        tooltip: 'Agora você já pode começar a vender',
      };
    case EnumVerificationStatus.BIOMETRY_PENDING:
      return {
        label: 'Biometria pendente',
        variant: 'warning',
        tooltip:
          'A verificação de identidade é necessário para o primeiro saque',
      };
    case EnumVerificationStatus.BIOMETRY_UNDER_ANALYSIS:
      return {
        label: 'Biometria em análise',
        variant: 'primary',
        tooltip: 'Sua verificação está em análise, aguarde',
      };
    case EnumVerificationStatus.BIOMETRY_REFUSED:
      return {
        label: 'Biometria recusada',
        variant: 'danger',
        tooltip:
          'A verificação de identidade é necessário para o primeiro saque',
      };
    case EnumVerificationStatus.BIOMETRY_APPROVED:
      return {
        label: 'Aprovada',
        variant: 'success',
        tooltip: 'Dados e biometria foram aprovados',
      };
    default:
      return {
        label: 'Dados pendentes',
        variant: 'warning',
        tooltip: 'Preencha dados para iniciar a verificação de dados',
      };
  }
};
