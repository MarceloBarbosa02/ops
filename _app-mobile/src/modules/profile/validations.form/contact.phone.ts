import { cleanMask } from 'masks-br';
import { z } from 'zod';

export const ToggleContactPhoneSchema = z
  .object({
    phone: z
      .string({ required_error: 'Informe seu telefone.' })
      .min(10, 'Informe um telefone válido.')
      .transform((value) => value?.replace(/\D/g, '')),
  })
  .refine((data) => cleanMask(data.phone).length < 13, {
    message: 'Informe um telefone válido.',
    path: ['phone'],
  });

export type TToggleContactPhoneSchema = z.infer<
  typeof ToggleContactPhoneSchema
>;
