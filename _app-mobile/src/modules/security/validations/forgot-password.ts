import {
  regexCapitalLetters,
  regexLowerLetters,
  regexOneNumber,
  regexSpecialChar,
} from '@/shared';
import { z } from 'zod';

export const ForgotPasswordSchema = z
  .object({
    newPassword: z
      .string({ required_error: 'Digite uma nova senha.' })
      .min(8, 'A senha deve conter no mínimo 8 caracteres.')
      .regex(regexOneNumber, 'A senha deve conter no mínimo um número.')
      .regex(
        regexSpecialChar,
        'A senha deve conter no mínimo um caractere especial.'
      )
      .regex(regexLowerLetters, 'A senha deve conter no mínimo uma letra.')
      .regex(
        regexCapitalLetters,
        'A senha deve conter no mínimo uma letra maiúscula.'
      ),

    newPasswordConfirmation: z
      .string({ required_error: 'Digite a senha novamente.' })
      .min(1, 'Digite a senha novamente.'),
  })
  .refine((fields) => fields?.newPassword === fields.newPasswordConfirmation, {
    message: 'As senhas digitadas não são iguais.',
    path: ['newPasswordConfirmation'],
  });

export type TForgotPasswordSchema = z.infer<typeof ForgotPasswordSchema>;
