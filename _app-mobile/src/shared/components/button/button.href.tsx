import { forwardRef, memo } from 'react';
import { TButtonProps } from './button.types';
import { Link, LinkProps, router } from 'expo-router';
import Button from './button';

const ButtonHRef = (props: TButtonProps, ref: any) => {
  return <Button {...props} onPress={() => router.push(props.href!)} />;
};

export default memo(forwardRef(ButtonHRef));
