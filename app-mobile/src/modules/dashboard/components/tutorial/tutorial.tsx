import { MotiView } from 'moti';
import { View } from 'react-native';
import { Easing } from 'react-native-reanimated';

import { ChevronRightIcon } from '@/shared/assets/components/generics/chevron-right';
import { Button, Progress, Typography } from '@/shared/components';

import { useTutorial } from './use-tutorial';

const TutorialCard = () => {
  const {
    isVisible,
    isLoadingProducts,
    indexActive,
    progressSteps,
    handleNavigationProfile,
  } = useTutorial();

  if (isLoadingProducts) {
    return <></>;
  }

  return (
    <View className="flex-1 rounded-lg bg-gray-50 p-4 gap-4">
      <View className="flex-row gap-1 items-center">
        <Typography title="Tutorial" weight="bold" />
        <View className="p-1 bg-yellow-100 rounded">
          <Typography
            title="OBRIGATÓRIO"
            weight="bold"
            className="text-orange-600"
            variant="caption"
          />
        </View>
      </View>

      <View className="gap-1">
        <View className="flex-row items-center justify-between">
          <Typography
            title="Quase lá, siga as etapas e comece a vender"
            size="small"
          />
          <View className="flex-row gap-1">
            <Typography
              title={`${indexActive?.step}`}
              size="small"
              weight="bold"
            />
            <Typography title="de 3" size="small" />
          </View>
        </View>
        <Progress progress={progressSteps} />
      </View>

      <View className="bg-gray-200 rounded-lg p-4">
        <View className="flex-row items-center gap-4">
          <View>
            <View className="absolute top-0 left-0 items-center">
              <MotiView
                from={{
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  opacity: 0.2,
                  scale: 3,
                }}
                transition={{
                  type: 'timing',
                  duration: 1500,
                  easing: Easing.inOut(Easing.ease),
                  loop: true,
                }}>
                <View className="w-3 h-3 rounded-full bg-gray-50" />
              </MotiView>
            </View>
            <MotiView
              from={{
                scale: 1,
              }}
              animate={{
                scale: 1.5,
              }}
              transition={{
                type: 'timing',
                duration: 2000,
                easing: Easing.in(Easing.elastic(1.5)),
                loop: true,
              }}>
              <View className="w-3 h-3 rounded-full bg-blue-300" />
            </MotiView>
          </View>
          <Typography title={indexActive?.title} weight="bold" />
        </View>
        <View className="py-4">
          <Typography title={indexActive?.description} size="small" />
        </View>
        <Button
          title="Começar"
          radius="full"
          size="medium"
          endContent={<ChevronRightIcon />}
          onPress={indexActive?.onNavigation}
        />
      </View>
    </View>
  );
};

export default TutorialCard;
