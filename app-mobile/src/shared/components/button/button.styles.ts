import { TButtonProps } from './button.types';

export const classNamesBackground = ({
  size,
  radius,
  variant,
  sizeWidth,
  className,
  colorValue,
  isDisabled,
}: TButtonProps): string => {
  const variants = [
    'flex-row items-center justify-center gap-2 rounded w-auto',
    className,
  ];

  if (size === 'large') variants.push('p-4');
  if (size === 'medium') variants.push('px-4 py-3');
  if (size === 'small') variants.push('px-4 py-2');
  if (size === 'xsmall') variants.push('px-4 py-2');

  if (sizeWidth === 'size10') variants.push('w-[10%]');
  if (sizeWidth === 'size20') variants.push('w-[20%]');
  if (sizeWidth === 'size30') variants.push('w-[30%]');
  if (sizeWidth === 'size40') variants.push('w-[40%]');
  if (sizeWidth === 'size50') variants.push('w-[47%]');
  if (sizeWidth === 'sizeFull') variants.push('w-full');

  if (radius === 'full') variants.push('rounded-full');
  if (radius === 'md') variants.push('rounded-lg');
  if (radius === 'sm') variants.push('rounded');

  if (variant === 'link') variants.push('bg-transparent');
  if (variant === 'outlined') variants.push('border-2 bg-transparent');

  if (variant === 'solid' && colorValue === 'danger')
    variants.push(isDisabled ? 'bg-gray-300 dark:bg-gray-500' : 'bg-red-600');
  if (variant === 'solid' && colorValue === 'primary')
    variants.push(isDisabled ? 'bg-gray-300 dark:bg-gray-500' : 'bg-blue-600');
  if (variant === 'solid' && colorValue === 'secondary')
    variants.push(
      isDisabled ? 'bg-gray-300 dark:bg-gray-500' : 'bg-purple-600'
    );
  if (variant === 'solid' && colorValue === 'success')
    variants.push(isDisabled ? 'bg-gray-300 dark:bg-gray-500' : 'bg-green-600');
  if (variant === 'solid' && colorValue === 'tertiary')
    variants.push(isDisabled ? 'bg-gray-300 dark:bg-gray-500' : 'bg-gray-50');
  if (variant === 'solid' && colorValue === 'backWhite')
    variants.push(
      isDisabled
        ? 'bg-gray-300 dark:bg-gray-500'
        : 'bg-gray-600 dark:bg-gray-300'
    );
  if (variant === 'solid' && colorValue === 'whiteBlack')
    variants.push(
      isDisabled
        ? 'bg-gray-300 dark:bg-gray-500'
        : 'bg-gray-200 dark:bg-gray-700'
    );
  if (variant === 'solid' && colorValue === 'warning')
    variants.push(
      isDisabled ? 'bg-gray-300 dark:bg-gray-500' : 'bg-yellow-400'
    );

  if (variant === 'outlined' && colorValue === 'danger')
    variants.push(
      isDisabled ? 'border-gray-400' : 'border-red-600 dark:border-red-500'
    );
  if (variant === 'outlined' && colorValue === 'primary')
    variants.push(
      isDisabled ? 'border-gray-400' : 'border-blue-600 dark:border-blue-300'
    );
  if (variant === 'outlined' && colorValue === 'secondary')
    variants.push(
      isDisabled
        ? 'border-gray-400'
        : 'border-purple-600 dark:border-purple-500'
    );
  if (variant === 'outlined' && colorValue === 'success')
    variants.push(
      isDisabled ? 'border-gray-400' : 'border-green-600 dark:border-green-500'
    );
  if (variant === 'outlined' && colorValue === 'tertiary')
    variants.push(
      isDisabled ? 'border-gray-400' : 'border-button-solid-default-tertiary'
    );
  if (variant === 'outlined' && colorValue === 'warning')
    variants.push(
      isDisabled
        ? 'border-gray-400'
        : 'border-yellow-600 dark:border-yellow-500'
    );

  return variants.join(' ');
};

export const classNamesText = ({
  size,
  _text,
  variant,
  colorValue,
  isDisabled,
  textWeightButton,
}: TButtonProps): string => {
  const variants = ['', _text];

  if (size === 'large') variants.push('text-lg');
  if (size === 'medium') variants.push('text-base');
  if (size === 'small') variants.push('text-sm');
  if (size === 'xsmall') variants.push('text-xs');

  if (textWeightButton === 'black')
    variants.push('font-black font-Satoshi-Variable');
  if (textWeightButton === 'bold') variants.push('font-bold font-Satoshi-Bold');
  if (textWeightButton === 'medium')
    variants.push('font-medium font-Satoshi-Medium');
  if (textWeightButton === 'regular')
    variants.push('font-normal font-Satoshi-Regular');

  if (variant === 'link' && colorValue === 'danger')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-red-600 dark:text-red-600'
    );
  if (variant === 'link' && colorValue === 'primary')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-blue-600 dark:text-blue-300'
    );
  if (variant === 'link' && colorValue === 'secondary')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-purple-600 dark:text-purple-500'
    );
  if (variant === 'link' && colorValue === 'success')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-green-600 dark:text-green-500'
    );
  if (variant === 'link' && colorValue === 'tertiary')
    variants.push(isDisabled ? 'text-gray-400' : 'text-gray-600');
  if (variant === 'link' && colorValue === 'backWhite')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-gray-600 dark:text-gray-300'
    );
  if (variant === 'link' && colorValue === 'warning')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-yellow-600 dark:text-yellow-400'
    );

  if (variant === 'solid' && colorValue === 'danger')
    variants.push(isDisabled ? 'text-gray-400' : 'text-gray-50');
  if (variant === 'solid' && colorValue === 'primary')
    variants.push(isDisabled ? 'text-gray-400' : 'text-gray-50');
  if (variant === 'solid' && colorValue === 'secondary')
    variants.push(isDisabled ? 'text-gray-400' : 'text-gray-50');
  if (variant === 'solid' && colorValue === 'success')
    variants.push(isDisabled ? 'text-gray-400' : 'text-gray-50');
  if (variant === 'solid' && colorValue === 'tertiary')
    variants.push(isDisabled ? 'text-gray-400' : 'text-gray-900');
  if (variant === 'solid' && colorValue === 'warning')
    variants.push(isDisabled ? 'text-gray-400' : 'text-gray-900');
  if (variant === 'solid' && colorValue === 'backWhite')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-gray-50 dark:text-gray-900'
    );
  if (variant === 'solid' && colorValue === 'whiteBlack')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-gray-900 dark:text-gray-50'
    );

  if (variant === 'outlined' && colorValue === 'danger')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-red-600 dark:text-red-600'
    );
  if (variant === 'outlined' && colorValue === 'primary')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-blue-600 dark:text-blue-300'
    );
  if (variant === 'outlined' && colorValue === 'secondary')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-purple-600 dark:text-purple-500'
    );
  if (variant === 'outlined' && colorValue === 'success')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-green-600 dark:text-green-500'
    );
  if (variant === 'outlined' && colorValue === 'tertiary')
    variants.push(isDisabled ? 'text-gray-400' : 'text-button-link-tertiary');
  if (variant === 'outlined' && colorValue === 'warning')
    variants.push(
      isDisabled ? 'text-gray-400' : 'text-yellow-600 dark:text-yellow-400'
    );

  return variants.join(' ');
};
