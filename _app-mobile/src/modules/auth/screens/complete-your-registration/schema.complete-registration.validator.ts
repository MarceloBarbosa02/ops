import zod from 'zod';

export const FormCompleteRegistrationSchema = zod.object({
  new_email: zod
    .string({
      required_error: 'Informe um e-mail válido',
      invalid_type_error: 'E-mail inválido.',
    })
    .email({ message: 'E-mail inválido.' })
    .min(1, 'Informe um e-mail.'),
});

export type TFormCompleteRegistrationSchema = zod.infer<
  typeof FormCompleteRegistrationSchema
>;
