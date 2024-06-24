import {
  regexCapitalLetters,
  regexEmailIsValid,
  regexLowerLetters,
  regexOneNumber,
  regexSpecialChar,
} from '@/shared/utils';
import zod from 'zod';

export const FormSchema = zod.object({
  email: zod
    .string({ required_error: 'Informe um e-mail.' })
    .email({ message: 'Este email não é valido.' })
    .min(5, 'Informe um e-mail.')
    .regex(regexEmailIsValid, 'Este email não é valido.'),
  password: zod
    .string({
      required_error: 'Informe sua senha.',
    })
    .min(8, 'A senha deve conter no mínimo 8 caracteres.')
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
});

export type TFormSchemaUser = zod.infer<typeof FormSchema>;
