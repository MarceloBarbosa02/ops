import { TSwitchProps } from './switch.types';

export const classNamesSwitch = ({
  size,
  variant,
  active,
}: Omit<TSwitchProps, 'title'>): string => {
  const variantStyles = ['rounded-full p-1'];

  if (size === 'lg') variantStyles.push('h-8 w-14');
  if (size === 'md') variantStyles.push('h-7 w-12');
  if (size === 'sm') variantStyles.push('h-6 w-10');

  if (variant === 'default' && !active)
    variantStyles.push('items-start bg-gray-400');
  if (variant === 'default' && active)
    variantStyles.push('items-end bg-gray-500');

  if (variant === 'primary' && !active)
    variantStyles.push('items-start bg-gray-400');
  if (variant === 'primary' && active)
    variantStyles.push('items-end bg-blue-500');

  return variantStyles.join(' ');
};

export const classNamesSwitchDot = ({
  size,
}: Omit<TSwitchProps, 'title'>): string => {
  const variantStylesDot = ['rounded-full bg-slate-50'];

  if (size === 'lg') variantStylesDot.push('h-6 w-6');
  if (size === 'md') variantStylesDot.push('h-5 w-5');
  if (size === 'sm') variantStylesDot.push('h-4 w-4');

  return variantStylesDot.join(' ');
};
