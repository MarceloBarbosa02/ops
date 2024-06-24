import zod from 'zod';

export const FormForgotPasswordSchema = zod.object({
  email: zod
    .string({
      required_error: 'Este email não é valido',
    })
    .email({ message: 'Este email não é valido.' })
    .min(3, 'Este email não é valido.'),
});

export type TFormForgotPasswordSchema = zod.infer<
  typeof FormForgotPasswordSchema
>;
