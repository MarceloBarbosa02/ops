import { TCheckboxProps } from './checkbox.types';

export const classNamesCheckStyles = ({
  size,
  radius,
  isChecked,
  colorValue,
  isDisabled,
  errorMessage,
}: Omit<TCheckboxProps, 'label'>): string => {
  const variantsCheckStyles = ['border-2 items-center justify-center'];

  if (size === 'large') variantsCheckStyles.push('w-6 h-6');
  if (size === 'medium') variantsCheckStyles.push('w-5 h-5');
  if (size === 'small') variantsCheckStyles.push('w-4 h-4');

  if (radius === 'sm') variantsCheckStyles.push('rounded-md');
  if (radius === 'md') variantsCheckStyles.push('rounded-[7.2]');
  if (radius === 'lg') variantsCheckStyles.push('rounded-[8.4]');
  if (radius === 'full') variantsCheckStyles.push('rounded-full');

  if (errorMessage) variantsCheckStyles.push('border border-red-600');

  if (colorValue === 'danger')
    variantsCheckStyles.push('border border-red-600');

  if (colorValue === 'default')
    variantsCheckStyles.push('border border-gray-400');

  if (colorValue === 'primary')
    variantsCheckStyles.push('border border-blue-600');

  if (colorValue === 'purple')
    variantsCheckStyles.push('border border-purple-400');

  if (colorValue === 'success')
    variantsCheckStyles.push('border border-green-600');

  if (colorValue === 'warning')
    variantsCheckStyles.push('border border-yellow-600');

  if (colorValue === 'danger' && isChecked)
    variantsCheckStyles.push('border border-red-600 bg-red-600');

  if (colorValue === 'default' && isChecked)
    variantsCheckStyles.push('border border-gray-400 bg-gray-400');

  if (colorValue === 'primary' && isChecked)
    variantsCheckStyles.push('border border-blue-600 bg-blue-600');

  if (colorValue === 'purple' && isChecked)
    variantsCheckStyles.push('border border-purple-400 bg-purple-400');

  if (colorValue === 'success' && isChecked)
    variantsCheckStyles.push('border border-green-600 bg-green-600');

  if (colorValue === 'warning' && isChecked)
    variantsCheckStyles.push('border border-yellow-600 bg-yellow-600');

  if (isDisabled) variantsCheckStyles.push('opacity-40');

  return variantsCheckStyles.join(' ');
};

export const classNamesStylesText = ({
  size,
  line,
  isDisabled,
}: Omit<TCheckboxProps, 'label'>): string => {
  const variantsStylesText = [
    'flex-row items-center justify-center gap-2 rounded w-11/12',
  ];

  if (line) variantsStylesText.push('line-through');

  if (isDisabled) variantsStylesText.push('opacity-40');

  if (size === 'large') variantsStylesText.push('');
  if (size === 'medium') variantsStylesText.push('w-5 h-5');
  if (size === 'small') variantsStylesText.push('w-4 h-4');

  return variantsStylesText.join(' ');
};

export const classNamesStylesCheckbox = ({
  className,
}: Omit<TCheckboxProps, 'label'>): string => {
  const variantsStylesCheckbox = ['flex-row gap-2 items-center', className];

  return variantsStylesCheckbox.join(' ');
};

export const classNamesStylesCheckboxGroup = ({
  alignFlex,
}: Omit<TCheckboxProps, 'label'>): string => {
  const variantsGroup = ['gap-4 py-3'];

  if (alignFlex === 'row') variantsGroup.push('flex-row');
  if (alignFlex === 'column') variantsGroup.push('flex-col');

  return variantsGroup.join(' ');
};
