import {
  regexCapitalLetters,
  regexLowerLetters,
  regexOneNumber,
  regexSpecialChar,
} from '@/shared/utils';
import { z } from 'zod';

export const BuyerAccessSchema = z
  .object({
    new_password: z
      .string({ required_error: 'Informe uma senha.' })
      .min(1, 'Preencha com a nova senha.')
      .min(8, 'Sua senha deve ter no mínimo 8 caracteres.')
      .regex(regexOneNumber, 'Senha deve conter pelo menos um número.')
      .regex(regexSpecialChar, 'Senha deve conter caracteres especiais.')
      .regex(
        regexCapitalLetters,
        'Senha deve conter pelo menos uma letra maiúscula.'
      )
      .regex(
        regexLowerLetters,
        'Senha deve conter pelo menos uma letra minúscula.'
      ),

    password_confirm: z
      .string({
        required_error: 'Informe a confirmação da senha.',
      })
      .min(8, 'As senhas digitadas não coincidem.'),
  })
  .refine((fields) => fields?.new_password === fields.password_confirm, {
    message: 'As senhas digitadas não coincidem.',
    path: ['password_confirm'],
  });

export type TBuyerAccessSchema = z.infer<typeof BuyerAccessSchema>;
