import { TReceiptsSalesItem } from './receipts-sales.types';
import * as Linking from 'expo-linking';
import { Dimensions, Pressable, View } from 'react-native';
import { useMemo } from 'react';

import { Typography } from '@/shared/components';
import { format } from '@/shared/utils';
import { WhatsappIcon } from '@/shared/assets';

import { methodsPayment, saleStatusTitle } from './receipts-sales.mock';

import * as S from './receipts-sales.styles';
import { OrderBumpIcon } from '@/shared/assets/components/sales';

const { width } = Dimensions.get('window');

export const ReceiptsSalesItem = ({
  label,
  hasOrderBump,
  description,
}: TReceiptsSalesItem) => {
  const openLink = () =>
    Linking.openURL(
      `whatsapp://send?phone=${description.replace(/\s/g, '')}&text=`
    );

  const formatDescription = useMemo(() => {
    switch (label) {
      case 'Status':
        return saleStatusTitle(description);
      case 'Pagamento':
        return methodsPayment(description);
      case 'Contato':
        return (
          <Pressable onPress={openLink}>
            <WhatsappIcon />
          </Pressable>
        );

      default:
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            {hasOrderBump && <OrderBumpIcon />}
            <Typography
              title={format.limitarTamanhoString(description, width - 60)}
              weight="medium"
              size="small"
              colorValue="neutral-regular"
            />
          </View>
        );
    }
  }, [label, description]);

  return (
    <S.WrapperItem>
      <Typography
        title={format.limitarTamanhoString(label, width - 60)}
        weight="medium"
        size="small"
        colorValue="neutral-medium"
      />
      {formatDescription}
    </S.WrapperItem>
  );
};
