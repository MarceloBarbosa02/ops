import { useEffect, useRef } from 'react';
import { Animated, Dimensions, ScrollView, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { BarProgress, Button, Typography } from '@/shared/components';

import NextStepsItem from './next-steps.item';
import { useNextSteps } from './use.next-steps';

import * as S from './next-steps.styles';
import NextStepsSkeleton from './next-steps.skeleton';

const { width } = Dimensions.get('screen');
// sarfaraz3446@uorak.com
const NextStepsCards = () => {
  const { nextLevel, isVisible, progressSteps } = useNextSteps();
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);

  const activeIndex = nextLevel.findIndex((item) => item.active);
  const activeComplete = nextLevel.find((item) => item.active);

  const handleScrollToActive = () => {
    if (activeIndex === 0) {
      return scrollViewRef.current?.scrollTo({ x: 0, animated: true });
    }
    if (activeIndex === 1) {
      return scrollViewRef.current?.scrollTo({
        x: width / 1.55,
        animated: true,
      });
    }
    return scrollViewRef.current?.scrollTo({
      x: RFPercentage(75),
      animated: true,
    });
  };

  useEffect(() => {
    if (activeIndex) {
      handleScrollToActive();
    }
  }, [activeIndex]);

  if (!isVisible) {
    return <></>;
  }

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.WrapperDots>
          <S.Dots />
        </S.WrapperDots>
        <Typography title="Próximos passos" size="large" weight="bold" />
      </S.WrapperHeader>
      <S.WrapperProgress>
        <S.WrapperInfo>
          <Typography title="Siga as etapas" size="small" weight="regular" />
          <Typography
            title={`${activeComplete?.step} de 3`}
            size="small"
            weight="medium"
          />
        </S.WrapperInfo>
        <BarProgress sizeWidth={progressSteps} />
      </S.WrapperProgress>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        snapToAlignment="start"
        snapToOffsets={[...Array(nextLevel.length)].map((x, i) => width / 1.55)}
        decelerationRate={'fast'}
        scrollEventThrottle={16}
        pagingEnabled
        scrollEnabled>
        {nextLevel.map((item) => (
          <NextStepsItem key={item.step} item={item} />
        ))}
      </ScrollView>
    </S.Wrapper>
  );
};

export default NextStepsCards;
