import { Badge, BarProgress, Typography } from '@/shared/components';
import * as S from './journey.styles';
import { TJourneyCardInfo } from './journey.types';
import { View } from 'react-native';

export const JourneyInfo = ({ item }: TJourneyCardInfo) => {
  return (
    <S.WrapperCardInfo>
      <S.WrapperHeader>
        <Badge
          label={`NÍVEL ${item?.level}`}
          colorValue={item.completed || item.active ? 'primary' : 'secondary'}
          variant="outlined"
        />
        {item.completed ? (
          <Typography title={item?.titleValue} weight="bold" />
        ) : (
          <View style={{ flexDirection: 'row' }}>
            <Typography title={`${item?.titleValue}`} weight="bold" />
            <Typography title={` / R$${item?.label.max}`} />
          </View>
        )}
      </S.WrapperHeader>
      <S.WrapperInfo>
        <Typography title={item?.info?.title} weight="black" />
        <Typography title={item?.info?.description} />
        <BarProgress sizeWidth={item.progressInfo} />
      </S.WrapperInfo>
    </S.WrapperCardInfo>
  );
};
