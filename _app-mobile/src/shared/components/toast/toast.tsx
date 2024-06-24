import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Button } from '../button';
import { Typography } from '../typography';

import { TOneToastProps } from './toast.types';
import { useToastStore } from './use-toast-store';
import { useToast } from './use-toast';

import * as S from './toast.styles';

const Toast = ({ message }: TOneToastProps) => {
  const theme = useTheme();
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
      hideToast(message?.id);
    });
  }, [message?.id]);

  return (
    <Animated.View
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
        backgroundColor: theme.gray[50],
        borderRadius: 8,
      }}>
      <S.Wrapper>
        {getTypeIcon(message?.type)}
        <Typography
          title={message?.message as string}
          style={{ color: theme.button.text.secondary, width: '90%' }}
          size="small"
        />
      </S.Wrapper>
      {message?.isSettings && (
        <Button
          title="Acessar configurações"
          variant="outlined"
          colorValue="primary"
          onPress={() => handleOpenSettings(message?.id)}
        />
      )}
    </Animated.View>
  );
};

export default Toast;
