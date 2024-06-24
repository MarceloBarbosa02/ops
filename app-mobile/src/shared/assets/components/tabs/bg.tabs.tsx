import React from 'react';
import { Canvas, Rect, LinearGradient, vec } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';

import { colors } from '@/shared/theme';

export const LinearGradientTabs = () => {
  const { height, width } = useWindowDimensions();

  return (
    <Canvas style={{ width: width, height: height }}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={vec(140)}
          end={vec(110, 900)}
          colors={[colors.gray[900], colors.gray[300]]}
        />
      </Rect>
    </Canvas>
  );
};
