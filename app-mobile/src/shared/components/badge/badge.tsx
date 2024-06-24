import { Text, View } from 'react-native';
import { TBadgeProps } from './badge.types';
import { useBadge } from './use.badge';
import { forwardRef, memo } from 'react';

const Badge = (prop: TBadgeProps, ref: any) => {
  const { label, endContent, startContent, stylesBorder, stylesText } =
    useBadge({ ...prop });

  return (
    <View className={stylesBorder} ref={ref}>
      {startContent}
      <Text className={stylesText}>{label}</Text>
      {endContent}
    </View>
  );
};

export default memo(forwardRef(Badge));
