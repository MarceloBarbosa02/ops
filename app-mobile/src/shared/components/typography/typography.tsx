import { Text } from 'react-native';

import { TTypographyProps } from './typography.types';
import { useTypography } from './use.typography';
import { forwardRef, memo } from 'react';

const Typography = (props: TTypographyProps, ref: any) => {
  const { stylesTypography, title, children, ...rest } = useTypography({
    ...props,
  });

  return (
    <Text
      {...rest}
      className={stylesTypography}
      maxFontSizeMultiplier={1.1}
      ref={ref}>
      {title && title}
      {children && children}
    </Text>
  );
};

export default memo(forwardRef(Typography));
