import { Animated, FlatList } from 'react-native';
import { useRef, useState } from 'react';
import { MMKV } from 'react-native-mmkv';
import { useTheme } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { Button } from '@/shared/components';
import ArrowRight from '@/shared/assets/images/svg/arrow_right.svg';
import { EnumStorageSignIn, IconLogo } from '@/shared';

import { onboardItemsDataDark, onboardItemsDataLight } from './onboarding.mock';
import { CardsData } from '../../components/cards/sliders/sliders';
import { DotPage } from '../../components/dot/dot';

import * as S from './onboarding.styles';
import { router } from 'expo-router';

const storage = new MMKV();

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const vewConfig = useRef({ vewAreaCoveragePercentThreshold: 50 }).current;
  const theme = useTheme();

  const isDark =
    theme.theme === 'dark' ? onboardItemsDataDark : onboardItemsDataLight;

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / RFPercentage(42));
    setCurrentIndex(currentIndex);
  };

  const handleNavigation = async () => {
    if (currentIndex < onboardItemsDataDark.length - 1) {
      setCurrentIndex(currentIndex + 1);
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      storage.set(EnumStorageSignIn.ONBOARDING, 'onboard');
      router.replace('/sign-in');
    }
  };

  const handleScrollTo = (index: number) => {
    setCurrentIndex(index);
    slidesRef.current?.scrollToIndex({ index: index });
  };

  return (
    <S.Wrapper>
      <S.WrapperLogo>
        <IconLogo />
      </S.WrapperLogo>
      <FlatList
        ref={slidesRef}
        keyExtractor={(_, index) => index.toString()}
        data={isDark}
        horizontal
        renderItem={({ item }) => (
          <CardsData key={item?.id.toString()} item={item} />
        )}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{
          height: RFPercentage(50),
        }}
        snapToAlignment="start"
        decelerationRate="fast"
        pagingEnabled
      />
      <DotPage
        data={isDark}
        scrollX={scrollX}
        handleNavigation={handleScrollTo}
      />
      <S.Footer>
        <Button
          title="Continue"
          size="medium"
          endContent={<ArrowRight width={24} height={24} />}
          onPress={handleNavigation}
        />
      </S.Footer>
    </S.Wrapper>
  );
};

export default OnboardingScreen;
