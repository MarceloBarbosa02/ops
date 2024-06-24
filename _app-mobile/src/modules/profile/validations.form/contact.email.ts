import { regexEmailIsValid } from '@/shared';
import { z } from 'zod';

export const ToggleContactEmailSchema = z.object({
  email: z
    .string({ required_error: 'Informe um e-mail.' })
    .email({ message: 'Este email não é valido.' })
    .min(5, 'Informe um e-mail.')
    .regex(regexEmailIsValid, 'Este email não é valido.'),
});

export type TToggleContactEmailSchema = z.infer<
  typeof ToggleContactEmailSchema
>;
