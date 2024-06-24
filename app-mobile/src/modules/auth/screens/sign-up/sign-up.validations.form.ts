import {
  regexCapitalLetters,
  regexEmailIsValid,
  regexLowerLetters,
  regexOneNumber,
  regexSpecialChar,
} from '@/shared/utils/regex';
import { z } from 'zod';

export const FormCreateUserSchema = z
  .object({
    name: z
      .string({ required_error: 'Informe seu nome.' })
      .regex(/[A-Z][a-z]* [A-Z][a-z]*/, 'Informe seu nome completo')
      .min(3, 'Informe seu nome.'),

    phone: z
      .string({ required_error: 'Informe seu celular.' })
      .min(1, 'Informe um celular válido.')
      .transform((value) => value?.replace(/\D/g, '')),

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
      .string({
        required_error: 'As senhas digitadas não coincidem.',
      })
      .min(1, 'Informe a confirmação da senha.'),
    userTermsReadAt: z.boolean({ required_error: 'Aceite os termos de uso.' }),
  })
  // .refine((data) => cleanMask(data.phone).length < 12, {
  //   message: 'Informe um celular válido.',
  //   path: ['phone'],
  // })
  .refine((fields) => fields?.new_password === fields.password_confirm, {
    message: 'As senhas digitadas não coincidem.',
    path: ['password_confirm'],
  })
  .refine((fields) => fields?.userTermsReadAt, {
    message: 'Aceite os termos de uso.',
    path: ['userTermsReadAt'],
  });

export type IFormCreateUserSchema = z.infer<typeof FormCreateUserSchema>;
