import { Animated, ScrollView, TouchableOpacity, View } from 'react-native';
import { CardProducts } from './products';
import { Button, Typography } from '@/shared/components';
import {
  itemsCategories,
  itemsHeaderCategories,
} from '@/modules/marketplace/mocks/items-categories';
import { useCategory } from './use-category';
import { useState } from 'react';

const AllProducts = () => {
  return (
    <View className="pt-4">
      <View className="pb-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 16,
          }}>
          <View className="flex-row gap-4">
            {itemsHeaderCategories.map((item) => (
              <Button
                key={item.title}
                title={item.title}
                colorValue="tertiary"
                size="medium"
                radius="full"
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          flexGrow: 1,
          gap: 16,
          paddingHorizontal: 16,
          paddingBottom: 100,
        }}>
        <View className="w-full gap-4">
          {itemsCategories.map((item) => (
            <CardProducts key={item.id} title={item.title} type={item.type} />
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default AllProducts;
