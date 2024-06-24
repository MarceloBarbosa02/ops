import { IFormCreateUserSchema } from '@/modules/auth/screens/sign-up/sign-up.validations.form';
import { Control, FieldErrors } from 'react-hook-form';

export type TPasswordsProps = {
  control: Control<any>;
  errors: FieldErrors<IFormCreateUserSchema>;
};

export type TStrengthBarProps = {
  password?: string;
  passWorld?: string;
  score?: number;
};
