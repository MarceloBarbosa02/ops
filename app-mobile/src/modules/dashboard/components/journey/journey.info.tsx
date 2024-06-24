import { View } from 'react-native';

import { Badge, Typography } from '@/shared/components';

import { TJourneyCardInfo } from './journey.types';

export const JourneyInfo = ({ item }: TJourneyCardInfo) => {
  console.log({ item });

  return (
    <View>
      <View>
        <Badge
          label={`NÍVEL ${item?.level}`}
          colorValue="primary"
          variant="outlined"
        />
        <Typography
          title={
            item.completed
              ? item?.titleValue
              : `${item?.titleValue} / ${item?.label.max}`
          }
        />
      </View>
      <View>
        <Typography title={item?.info?.title} weight="bold" />
        <Typography title={item?.info?.description} />
        {/* <BarProgress sizeWidth={item.progressInfo} /> */}
      </View>
    </View>
  );
};
