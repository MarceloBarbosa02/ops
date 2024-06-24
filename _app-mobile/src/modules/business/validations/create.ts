import { z } from 'zod';

export const CreateBusinessSchema = z.object({
  nickname: z
    .string({ required_error: 'Informe seu apelido.' })
    .min(3, 'Informe seu apelido.')
    .nullable(),
  isDefault: z.boolean().nullable(),
});

export type TCreateBusinessSchema = z.infer<typeof CreateBusinessSchema>;
