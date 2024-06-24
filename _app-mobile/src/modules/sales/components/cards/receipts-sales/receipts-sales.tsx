import { Button, Typography } from '@/shared/components';
import * as S from './receipts-sales.styles';
import { ReceiptsSalesItem } from './receipts-sales.item';
import { TReceiptsSalesCard } from './receipts-sales.types';
import { format } from 'date-fns';
import { View } from 'react-native';
import { router } from 'expo-router';
import { useHistory } from '../../history/use-history';
import { Pressable } from 'react-native';
import { EnumChargeFrequency } from '@/shared/enum';
import { formatCurrencyMoneyPtBr } from '@/shared/utils';

const ReceiptsSalesCards = ({ data }: TReceiptsSalesCard) => {
  const { handleNavigationDetails } = useHistory();
  return (
    <S.Wrapper>
      <View style={{ paddingVertical: 16 }}>
        <ReceiptsSalesItem
          label="ID"
          description={data.code}
          hasOrderBump={data?.hasOrderBump}
        />
        <ReceiptsSalesItem label="Produto" description={data.product} />
        <ReceiptsSalesItem label="Cliente" description={data.customer} />
        <ReceiptsSalesItem label="Status" description={data.status} />
        <ReceiptsSalesItem
          label="Período"
          description={format(
            new Date(data.createdAt),
            "dd/MM/yyyy ' às ' H'h'mm"
          )}
        />
        <ReceiptsSalesItem label="Pagamento" description={data.brand} />
        <ReceiptsSalesItem
          label="Valor"
          description={
            data.value === 0 ? 'Gratuito' : formatCurrencyMoneyPtBr(data.value)
          }
        />
        <ReceiptsSalesItem label="Contato" description={data.phoneNumber} />
        {data.chargeFrequency && (
          <ReceiptsSalesItem
            label="Frequência"
            description={`${EnumChargeFrequency[data.chargeFrequency]} ${
              data.chargeNumber
            }/${data.chargeLimit}`}
          />
        )}
      </View>
      <S.WrapperFooter>
        <S.ButtonMore
          onPress={() => handleNavigationDetails(data.uuid)}
          style={{ width: '100%' }}>
          <Typography
            title="Ver mais"
            variant="subtitle"
            colorValue="neutral-regular"
          />
        </S.ButtonMore>
      </S.WrapperFooter>
    </S.Wrapper>
  );
};

export default ReceiptsSalesCards;
