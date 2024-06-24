import { useRef, useState } from 'react';
import { Animated, FlatList, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { FooterWelcome } from '../../components/footer';
import { HeaderWelcome } from '../../components/header';
import { welcomeData } from '../../mocks/slider.welcome';
import { Slider } from '../../components/slider';

const WelcomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRefFlatList = useRef<FlatList>(null);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / RFPercentage(42));
    setCurrentIndex(currentIndex);
  };

  const handleScrollTo = (index: number) => {
    setCurrentIndex(index);
    slidesRefFlatList.current?.scrollToIndex({ index: index });
  };

  return (
    <View className="flex-1 bg-gray-900">
      <HeaderWelcome onNavigation={handleScrollTo} index={currentIndex} />
      <FlatList
        ref={slidesRefFlatList}
        keyExtractor={(_, index) => index.toString()}
        data={welcomeData}
        horizontal
        renderItem={({ item }) => <Slider key={item.id} item={item} />}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        snapToAlignment="start"
        decelerationRate="fast"
        pagingEnabled
      />
      <FooterWelcome />
    </View>
  );
};

export default WelcomeScreen;
