import { Button, Typography } from '@/shared/components';
import { ScrollView, View } from 'react-native';
import { TCategoryProductProps, TCategoryProps } from '../cards.types';
import { ChevronRightIcon } from '@/shared/assets';
import { useFetchMarketplace } from '@/shared/queries/marketplace/marketplace';
import { ItemList } from './item-list';
import { useMemo } from 'react';
import { TMarketplaceItemResponse } from '@/shared/queries/marketplace/marketplace.types';

export const CardProducts = ({ title, type }: TCategoryProductProps) => {
  const params = useMemo(() => {
    return {
      type: type,
      page: 1,
      pageSize: 10,
    };
  }, [type]);

  const { data: dataCategory, isFetching } = useFetchMarketplace(params);

  if (isFetching) return <></>;

  return (
    <View className="w-full gap-4 bg-gray-50 p-4 rounded-lg">
      <View className="w-full flex-row justify-between">
        <Typography title={title} weight="bold" />
        <Button
          onPress={() => {}}
          title="Ver mais"
          variant="link"
          endContent={<ChevronRightIcon variant="primary" />}
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{ flexGrow: 1, gap: 16 }}>
        {dataCategory?.data?.map((item: TMarketplaceItemResponse) => (
          <ItemList item={item} key={item.uuid} />
        ))}
      </ScrollView>
    </View>
  );
};
