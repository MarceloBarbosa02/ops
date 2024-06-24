import { useState } from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { imagesHeadersData } from '@/modules/marketplace/mocks/images-headers';
import { Typography } from '@/shared/components';
import { ArrowLeftIcon } from '@/shared/assets';
import { router } from 'expo-router';
import { useCategory } from '../category/use-category';

const HeaderMarket = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowDimensions();
  const { changeScrollY } = useCategory();

  return (
    <View>
      <View className="w-full flex-row items-center bg-gray-950 p-4">
        <View className="w-full">
          <View className="w-full flex-row  items-center">
            <View className="flex-row items-center gap-4">
              <TouchableOpacity onPress={() => router.back()}>
                <ArrowLeftIcon />
              </TouchableOpacity>
              <Typography title="Marketplace" weight="bold" color="white" />
            </View>
            {changeScrollY <= 0 && (
              <View className="w-full flex-row justify-center items-center gap-[12px]">
                <View
                  className={`w-8 h-[6px] rounded-full ${currentIndex === 0 ? 'bg-blue-500' : 'bg-gray-600'}`}
                />
                <View
                  className={`w-8 h-[6px] rounded-full ${currentIndex === 1 ? 'bg-blue-500' : 'bg-gray-600'}`}
                />
                <View
                  className={`w-8 h-[6px] rounded-full ${currentIndex === 2 ? 'bg-blue-500' : 'bg-gray-600'}`}
                />
              </View>
            )}
          </View>
          <Typography
            title="Encontre os melhores produtos para se afiliar e comece a lucrar"
            variant="caption"
            color="neutral-light"
          />
        </View>
      </View>
      {changeScrollY <= 0 && (
        <View className="w-full h-64">
          <Carousel
            loop
            width={width}
            height={260}
            autoPlay={true}
            data={imagesHeadersData}
            scrollAnimationDuration={500}
            autoPlayInterval={5000}
            onSnapToItem={(index) => setCurrentIndex(index)}
            renderItem={({ item }) => (
              <ImageBackground
                source={item?.img}
                resizeMode="cover"
                style={{ width: width, height: 220 }}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default HeaderMarket;
