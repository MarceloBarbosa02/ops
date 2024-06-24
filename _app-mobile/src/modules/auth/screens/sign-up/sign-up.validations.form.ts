import {
  regexCapitalLetters,
  regexEmailIsValid,
  regexLowerLetters,
  regexOneNumber,
  regexSpecialChar,
} from '@/shared/utils/regex';
import { cleanMask } from 'masks-br';
import { z } from 'zod';

export const CreateUserSchema = z
  .object({
    name: z
      .string({ required_error: 'Informe seu nome.' })
      .min(5, 'Informe seu nome.'),

    last_name: z
      .string({ required_error: 'Informe seu sobrenome.' })
      .min(3, 'Informe seu nome.'),

    phone: z.string({ required_error: 'Informe seu celular.' }),
    // .min(12, 'Informe um celular válido.')
    // .transform((value) => value?.replace(/\D/g, '')),

    new_email: z
      .string({ required_error: 'Informe seu e-mail.' })
      .min(1, 'Este email não é valido')
      .max(60, 'O email deve ter no máximo 60 caracteres')
      .regex(regexEmailIsValid, 'Este email não é valido.'),

    new_password: z
      .string({ required_error: 'Informe uma senha.' })
      .min(
        8,
        'Sua senha deve conter mais de 8 caracteres. Pelo menos 1 número, 1 letra minúscula e 1 caractere especial.'
      )
      .regex(
        regexOneNumber,
        'Sua senha deve conter mais de 8 caracteres. Pelo menos 1 número, 1 letra minúscula e 1 caractere especial.'
      )
      .regex(
        regexSpecialChar,
        'Sua senha deve conter mais de 8 caracteres. Pelo menos 1 número, 1 letra minúscula e 1 caractere especial.'
      )
      .regex(
        regexCapitalLetters,
        'Sua senha deve conter mais de 8 caracteres. Pelo menos 1 número, 1 letra minúscula e 1 caractere especial.'
      )
      .regex(
        regexLowerLetters,
        'Sua senha deve conter mais de 8 caracteres. Pelo menos 1 número, 1 letra minúscula e 1 caractere especial.'
      ),

    password_confirm: z
      .string({ required_error: 'Informe a confirmação da senha.' })
      .min(8, 'As senhas digitadas não coincidem.'),
  })
  .refine((data) => cleanMask(data.phone).length < 13, {
    message: 'Informe um celular válido.',
    path: ['phone'],
  })
  .refine((fields) => fields?.new_password === fields.password_confirm, {
    message: 'As senhas digitadas não coincidem.',
    path: ['password_confirm'],
  });

export type IFormCreateUserSchema = z.infer<typeof CreateUserSchema>;
