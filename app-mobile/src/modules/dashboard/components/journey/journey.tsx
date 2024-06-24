import { View } from 'react-native';

import { useFetchBalances } from '@/shared/queries/balance';
import { Typography } from '@/shared/components';
import { format } from '@/shared/utils';

import { JourneyItemIcon } from './journey.item';
import { useJourney } from './use.jorney';

const JourneyCards = () => {
  const { data: balances } = useFetchBalances();
  const { newArrLevels } = useJourney(Number(balances?.totalSales));

  return (
    <View className="bg-gray-50 rounded-lg p-4 gap-4">
      <View className="flex-row items-center justify-between">
        <Typography title="Jornada de conquistas" weight="bold" />
        <View className="flex-row gap-1">
          <Typography title="Total: " weight="bold" />
          <Typography
            title={format.money(balances?.totalSales || 0)}
            weight="bold"
            color="primary"
          />
        </View>
      </View>
      <View className="w-auto gap-2 items-center justify-center flex-row flex-wrap">
        {newArrLevels.map((item) => (
          <JourneyItemIcon key={item.level} item={item} />
        ))}
      </View>
    </View>
  );
};

export default JourneyCards;
