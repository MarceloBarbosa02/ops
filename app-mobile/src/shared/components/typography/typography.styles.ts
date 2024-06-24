import { TTypographyProps } from './typography.types';

export const styledTypography = ({
  variant,
  size,
  weight,
  color,
  align,
  className,
}: Omit<TTypographyProps, 'title'>): string => {
  const variants = ['', className];

  if (align === 'center') variants.push('text-center');
  if (align === 'left') variants.push('text-left');
  if (align === 'right') variants.push('text-right');

  if (weight === 'black') variants.push('font-black font-Satoshi-Variable');
  if (weight === 'bold') variants.push('font-bold font-Satoshi-Bold');
  if (weight === 'light') variants.push('font-light font-Satoshi-Light');
  if (weight === 'medium') variants.push('font-medium font-Satoshi-Medium');
  if (weight === 'regular') variants.push('font-normal font-Satoshi-Regular');

  if (color === 'neutral') variants.push('text-gray-900');
  if (color === 'neutral-black') variants.push('text-gray-800');
  if (color === 'neutral-bold') variants.push('text-gray-700');
  if (color === 'neutral-medium') variants.push('text-gray-600');
  if (color === 'neutral-regular') variants.push('text-gray-500');
  if (color === 'neutral-light') variants.push('text-gray-400');
  if (color === 'danger') variants.push('text-red-600');
  if (color === 'primary') variants.push('text-blue-600');
  if (color === 'secondary') variants.push('text-purple-600');
  if (color === 'success') variants.push('text-green-600');
  if (color === 'warning') variants.push('text-yellow-600');
  if (color === 'white') variants.push('text-gray-50');

  if (variant === 'body' && size === 'large')
    variants.push('text-lg leading-6');
  if (variant === 'body' && size === 'medium')
    variants.push('text-base leading-6');
  if (variant === 'body' && size === 'small')
    variants.push('text-sm leading-6');

  if (variant === 'head' && size === 'large')
    variants.push('text-[52px] leading-[60px]');
  if (variant === 'head' && size === 'medium')
    variants.push('text-[44px] leading-[52px]');
  if (variant === 'head' && size === 'small')
    variants.push('text-[32px] leading-[32px]');

  if (variant === 'subheading' && size === 'large')
    variants.push('text-2xl leading-[32px]');
  if (variant === 'subheading' && size === 'medium')
    variants.push('text-xl leading-[32px]');
  if (variant === 'subheading' && size === 'small')
    variants.push('text-lg leading-[32px]');

  if (variant === 'caption' && size === 'large')
    variants.push('text-sm leading-[16px]');
  if (variant === 'caption' && size === 'medium')
    variants.push('text-xs leading-[16px]');
  if (variant === 'caption' && size === 'small')
    variants.push('text-[10px] leading-[16px]');

  if (variant === 'microText') variants.push('text-[8px] leading-[10px]');

  return variants.join(' ');
};
