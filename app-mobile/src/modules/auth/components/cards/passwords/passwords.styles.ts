import { StrengthBarProps } from '@/modules/auth/screens/sign-up/sign-up.types';

export const classNamesStylesBar = ({ passWorld, score }: StrengthBarProps) => {
  const variants = [''];

  if (passWorld === 'Fraca' && score === 0)
    variants.push('w-1/3 h-[6px] bg-red-600');

  if (passWorld === 'Média' && score === 1)
    variants.push('w-2/3 h-[6px] bg-yellow-600');

  if (passWorld === 'Forte' && score === 2)
    variants.push('w-full h-[6px] bg-green-600');

  return variants.join(' ');
};

export const classNamesStylesText = ({
  passWorld,
  score,
}: StrengthBarProps) => {
  const variants = [''];

  if (passWorld === 'Fraca' && score === 0) variants.push('color-red-600');

  if (passWorld === 'Média' && score === 1) variants.push('color-yellow-700');

  if (passWorld === 'Forte' && score === 2) variants.push('color-green-600');

  return variants.join(' ');
};
