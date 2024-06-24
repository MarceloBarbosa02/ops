import { forwardRef, memo, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

import { OneToastProps, TToast } from './toast.types';
import { useToastStore } from './use-toast-store';
import { useToast } from './use-toast';
import { Button } from '../button';
import { Typography } from '../typography';
import { colors } from '../../theme/colors';

const Toast = ({ message }: OneToastProps, ref: any) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const { getTypeIcon, handleOpenSettings } = useToast();
  const { hideToast } = useToastStore((store) => {
    return {
      hideToast: store.hideToast,
    };
  });

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(message?.delay as number),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      hideToast(String(message?.id));
    });
  }, [message?.id]);

  return (
    <Animated.View
      ref={ref}
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, -10],
            }),
          },
        ],
        margin: 10,
        marginBottom: 5,
        backgroundColor: colors.gray[50],
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
      }}>
      <View className="flex-1 flex-row items-center gap-2 border p-3 border-gray-300 rounded bg-gray-100 ">
        {getTypeIcon(message?.type as TToast)}
        <View>
          <Typography title={message?.message as string} />
        </View>
      </View>
      {message?.isSettings && (
        <Button
          title="Acessar configurações"
          variant="outlined"
          colorValue="primary"
          onPress={() => handleOpenSettings(String(message?.id))}
        />
      )}
    </Animated.View>
  );
};

export default memo(forwardRef(Toast));
