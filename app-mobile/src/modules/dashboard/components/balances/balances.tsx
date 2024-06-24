import { View } from 'react-native';

import { ChevronRightIcon } from '@/shared/assets/components';
import { Button, Typography } from '@/shared/components';
import { useFetchBalances } from '@/shared/queries/balance';
import { format } from '@/shared/utils';

const BalancesCard = () => {
  const { data: balances } = useFetchBalances();

  return (
    <View className="flex-1 rounded-lg bg-gray-50 p-4 gap-3">
      <View className="flex-row justify-between items-start">
        <View>
          <Typography title="Vendas hoje" weight="bold" color="neutral-black" />
          <Typography
            title={format.money(balances?.previousDayBalance || 0)}
            variant="subheading"
            size="large"
            weight="bold"
            color="neutral-black"
          />
        </View>
        <Button
          title="Fianças"
          variant="link"
          endContent={<ChevronRightIcon variant="primary" />}
        />
      </View>
      <View className="flex-row gap-4">
        <View className="gap-2 bg-gray-200 py-2 px-4 rounded w-[48%]">
          <Typography
            title="Valores pendentes"
            weight="bold"
            size="small"
            color="neutral-medium"
          />
          <Typography
            title={format.money(balances?.pendingBalance || 0)}
            weight="bold"
            size="small"
            color="neutral-medium"
          />
        </View>
        <View className="gap-2 bg-gray-200 py-2 px-4 rounded w-[48%]">
          <Typography
            title="Saldo disponível"
            weight="bold"
            size="small"
            color="neutral-medium"
          />
          <Typography
            title={format.money(balances?.availableBalance || 0)}
            weight="bold"
            size="small"
            color="neutral-medium"
          />
        </View>
      </View>
    </View>
  );
};

export default BalancesCard;
