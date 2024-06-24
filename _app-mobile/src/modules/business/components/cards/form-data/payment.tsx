import { Typography } from '@/shared/components';
import * as S from './formData.styles';
import { useBusinessStore } from '@/modules/business/store/use-business-store';
import { WarningIcon } from '@/shared/assets/components/toast';
import { useTheme } from 'styled-components/native';

export const PaymentCard = () => {
  const theme = useTheme();
  const { person } = useBusinessStore();

  return (
    <>
      <Typography title="Pagamento" weight="bold" size="large" />
      <S.WrapperCardInfo>
        <WarningIcon />
        <S.WrapperTextGenerics>
          Seu recebimento via{' '}
          <Typography
            title="PIX"
            weight="bold"
            style={{ color: theme.button.text.secondary }}
          />{' '}
          está atrelado ao{' '}
          <Typography
            title={person === 'LEGAL_PERSON' ? 'CNPJ' : 'CPF'}
            weight="bold"
            style={{ color: theme.button.text.secondary }}
          />{' '}
          informado
        </S.WrapperTextGenerics>
      </S.WrapperCardInfo>
    </>
  );
};
