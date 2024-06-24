import { TBadgeProps } from './badge.types';

export const classNamesBackground = ({
  radius,
  variant,
  className,
  colorValue,
  typeBorder,
}: Omit<TBadgeProps, 'label'>): string => {
  const variantsStyles = [
    'py-1 px-2 rounded-[4] flex-row items-center gap-1',
    className,
  ];

  if (typeBorder === 'solid') variantsStyles.push('border-solid');
  if (typeBorder === 'dashed') variantsStyles.push('border-dashed');

  if (radius === 'full') variantsStyles.push('rounded-full');
  if (radius === 'md') variantsStyles.push('rounded-lg');
  if (radius === 'sm') variantsStyles.push('rounded');

  if (variant === 'outlined' && colorValue === 'danger')
    variantsStyles.push('border border-red-600');
  if (variant === 'outlined' && colorValue === 'primary')
    variantsStyles.push('border border-blue-600');
  if (variant === 'outlined' && colorValue === 'purple')
    variantsStyles.push('border border-purple-600');
  if (variant === 'outlined' && colorValue === 'secondary')
    variantsStyles.push('border border-gray-600');
  if (variant === 'outlined' && colorValue === 'success')
    variantsStyles.push('border border-green-600');
  if (variant === 'outlined' && colorValue === 'warning')
    variantsStyles.push('border border-orange-600');
  if (variant === 'outlined' && colorValue === 'default')
    variantsStyles.push('border border-gray-300');

  if (variant === 'solid' && colorValue === 'danger')
    variantsStyles.push('bg-red-600');
  if (variant === 'solid' && colorValue === 'primary')
    variantsStyles.push('bg-blue-600');
  if (variant === 'solid' && colorValue === 'purple')
    variantsStyles.push('bg-purple-600');
  if (variant === 'solid' && colorValue === 'secondary')
    variantsStyles.push('bg-gray-600');
  if (variant === 'solid' && colorValue === 'success')
    variantsStyles.push('bg-green-600');
  if (variant === 'solid' && colorValue === 'warning')
    variantsStyles.push('bg-orange-600');
  if (variant === 'solid' && colorValue === 'default')
    variantsStyles.push('bg-gray-300');

  return variantsStyles.join(' ');
};

export const classNamesText = ({
  variant,
  _text,
  colorValue,
}: Omit<TBadgeProps, 'label'>): string => {
  const variantsStylesText = ['font-bold font-Satoshi-Bold', _text];

  if (variant === 'outlined' && colorValue === 'danger')
    variantsStylesText.push('text-red-600');
  if (variant === 'outlined' && colorValue === 'primary')
    variantsStylesText.push('text-blue-600');
  if (variant === 'outlined' && colorValue === 'purple')
    variantsStylesText.push('text-purple-600');
  if (variant === 'outlined' && colorValue === 'secondary')
    variantsStylesText.push('text-gray-600');
  if (variant === 'outlined' && colorValue === 'success')
    variantsStylesText.push('text-green-600');
  if (variant === 'outlined' && colorValue === 'warning')
    variantsStylesText.push('text-orange-600');

  if (variant === 'solid') variantsStylesText.push('text-gray-50');
  if (variant === 'solid' && colorValue === 'default')
    variantsStylesText.push('text-gray-900');

  return variantsStylesText.join(' ');
};
