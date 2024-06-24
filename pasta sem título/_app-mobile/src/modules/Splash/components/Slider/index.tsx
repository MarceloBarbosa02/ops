import React, { useRef, useState } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { Animated, FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { MMKV } from "react-native-mmkv";

import ArrowRight from "@shared/assets/icons/svg/arrow_right.svg";
import { ButtonMaster } from "@shared/components/Buttons";
import {
  onboard_data_dark,
  onboard_data_light,
} from "@modules/Splash/mocks/onboarding";
import { EnumStorageSignIn } from "@shared/types/enum";

import { CardsData } from "../CardsData";
import { DotPage } from "../DotPage";
import * as S from "./styles";

const storage = new MMKV();

export const Slider = () => {
  const { navigate } = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const vewConfig = useRef({ vewAreaCoveragePercentThreshold: 50 }).current;
  const theme = useTheme();

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / RFPercentage(42));
    setCurrentIndex(currentIndex);
  };

  const handleNavigation = async () => {
    if (currentIndex < onboard_data_dark.length - 1) {
      setCurrentIndex(currentIndex + 1);
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      storage.set(EnumStorageSignIn.ONBOARDING, "onboard");
      navigate("SignIn");
    }
  };

  const handleScrollTo = (index: number) => {
    setCurrentIndex(index);
    slidesRef.current?.scrollToIndex({ index: index });
  };

  return (
    <>
      <FlatList
        ref={slidesRef}
        keyExtractor={(_, index) => index.toString()}
        data={theme.theme === "dark" ? onboard_data_dark : onboard_data_light}
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
        viewabilityConfig={vewConfig}
        contentContainerStyle={{
          height: RFPercentage(60),
        }}
        snapToAlignment="start"
        decelerationRate="fast"
        pagingEnabled
      />
      <DotPage
        data={theme.theme === "dark" ? onboard_data_dark : onboard_data_light}
        scrollX={scrollX}
        handleNavigation={handleScrollTo}
      />
      <S.Footer>
        <ButtonMaster
          title="Continue"
          variant="primary"
          icon={<ArrowRight width={24} height={24} />}
          positionIcon="right"
          onPress={handleNavigation}
        />
      </S.Footer>
    </>
  );
};
