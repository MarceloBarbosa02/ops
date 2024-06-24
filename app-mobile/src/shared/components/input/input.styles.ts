// import { VariantProps, tv } from 'tailwind-variants';

import { TInputProps } from './input.types';

export const styledWrapperInput = ({
  variant,
  labelPlacement,
  className,
}: TInputProps): string => {
  const variants = ['rounded-md h-12 mt-1 w-full', className];

  if (labelPlacement === 'higher' && variant === 'default')
    variants.push('border border-gray-200 p-2 flex-row');

  if (labelPlacement === 'higher' && variant === 'disabled')
    variants.push('border border-gray-300 bg-gray-100 p-2 flex-row');

  if (labelPlacement === 'higher' && variant === 'error')
    variants.push('border border-red-600 bg-red-50 p-2 flex-row');

  if (labelPlacement === 'higher' && variant === 'focused')
    variants.push('border border-blue-600 bg-blue-50 p-2 flex-row');

  if (labelPlacement === 'higher' && variant === 'full')
    variants.push('border border-gray-300 bg-gray-100 p-2 flex-row');

  if (labelPlacement === 'phone' && variant === 'default')
    variants.push('border border-gray-200 p-2 flex-row');

  if (labelPlacement === 'phone' && variant === 'disabled')
    variants.push('border border-gray-300 bg-gray-100 p-2 flex-row');

  if (labelPlacement === 'phone' && variant === 'error')
    variants.push('border border-red-600 bg-red-50 p-2 flex-row');

  if (labelPlacement === 'phone' && variant === 'focused')
    variants.push('border border-blue-600 bg-blue-50 p-2 flex-row');

  if (labelPlacement === 'phone' && variant === 'full')
    variants.push('border border-gray-300 bg-gray-100 p-2 flex-row');

  if (labelPlacement === 'inLabel' && variant === 'default')
    variants.push('border border-gray-200 p-2 flex-row');

  if (labelPlacement === 'inLabel' && variant === 'disabled')
    variants.push('border border-gray-300 bg-gray-100 p-2 flex-row');

  if (labelPlacement === 'inLabel' && variant === 'error')
    variants.push('border border-red-600 bg-red-50 p-2 flex-row');

  if (labelPlacement === 'inLabel' && variant === 'focused')
    variants.push('border border-blue-600 bg-blue-50 p-2 flex-row');

  if (labelPlacement === 'inLabel' && variant === 'full')
    variants.push('border border-gray-300 bg-gray-100 p-2 flex-row');

  if (labelPlacement === 'outLabel' && variant === 'default')
    variants.push('border border-gray-200 p-2 flex-row');

  if (labelPlacement === 'outLabel' && variant === 'disabled')
    variants.push('border border-gray-300 bg-gray-100 p-2 flex-row');

  if (labelPlacement === 'outLabel' && variant === 'error')
    variants.push('border border-red-600 bg-red-50 p-2 flex-row');

  if (labelPlacement === 'outLabel' && variant === 'focused')
    variants.push('border border-blue-600 bg-blue-50 p-2 flex-row');
  if (labelPlacement === 'outLabel' && variant === 'full')
    variants.push('border border-gray-300 bg-gray-100 p-2 flex-row');

  return variants.join(' ');
};

export const styledInput = ({ className, variant }: TInputProps): string => {
  const variants = [' ml-3 text-sm font-normal', className];

  if (variant !== 'full') variants.push('flex-auto');

  return variants.join(' ');
};

export const styledWrapperLabel = ({ labelPlacement }: TInputProps): string => {
  const variants = ['w-auto'];

  if (labelPlacement === 'higher')
    variants.push('absolute flex-row items-center -top-1.5 px-2 z-10');

  if (labelPlacement === 'inLabel')
    variants.push('absolute flex-row items-center -top-1.5 px-2 z-10');

  if (labelPlacement === 'outLabel') variants.push('');

  return variants.join(' ');
};

export const styledLabel = ({
  className,
  variant,
  labelPlacement,
}: TInputProps): string => {
  const variants = [
    'font-Satoshi-Regular text-xs px-0.5 bg-gray-50',
    className,
  ];

  if (labelPlacement === 'higher' && variant === 'default')
    variants.push('text-gray-600');

  if (labelPlacement === 'higher' && variant === 'disabled') variants.push('');

  if (labelPlacement === 'higher' && variant === 'error')
    variants.push('text-red-600');

  if (labelPlacement === 'higher' && variant === 'focused')
    variants.push('text-blue-600');

  if (labelPlacement === 'outLabel' && variant === 'default')
    variants.push('text-gray-600');

  if (labelPlacement === 'outLabel' && variant === 'disabled')
    variants.push('');

  if (labelPlacement === 'outLabel' && variant === 'error')
    variants.push('text-red-600');

  if (labelPlacement === 'outLabel' && variant === 'focused')
    variants.push('text-blue-600');

  if (labelPlacement === 'inLabel' && variant === 'default')
    variants.push('text-gray-600');

  if (labelPlacement === 'inLabel' && variant === 'disabled') variants.push('');

  if (labelPlacement === 'inLabel' && variant === 'error')
    variants.push('text-red-600');

  if (labelPlacement === 'inLabel' && variant === 'focused')
    variants.push('text-blue-600');

  return variants.join(' ');
};
