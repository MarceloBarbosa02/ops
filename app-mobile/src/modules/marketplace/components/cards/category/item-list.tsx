import { Image, StyleSheet, View } from 'react-native';
import { TItemListProps } from './category.types';
import { Typography } from '@/shared/components';
import { format } from '@/shared/utils';
import { colors } from '@/shared/theme';

export const ItemList = ({ item }: TItemListProps) => {
  return (
    <View style={style.container}>
      <Image
        source={{ uri: item.photo }}
        style={style.image}
        resizeMode="cover"
      />
      <View className="w-full">
        <Typography title={item.name} weight="black" size="small" />
        <Typography
          title={item.format.name}
          variant="caption"
          weight="medium"
        />
        <Typography
          title={`por ${item.producer.name}`}
          variant="caption"
          size="small"
        />
      </View>
      <View className="w-full">
        <Typography title="Receba até" size="small" />
        <Typography
          title={format.money(item.maxCommission)}
          size="small"
          weight="black"
          color="primary"
        />
      </View>
    </View>
  );
};

export const style = StyleSheet.create({
  container: {
    width: 160,
    backgroundColor: colors.gray[100],
    alignItems: 'center',
    padding: 8,
    gap: 8,
    borderRadius: 4,
  },
  image: {
    width: 140,
    height: 140,
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 4,
  },
});
