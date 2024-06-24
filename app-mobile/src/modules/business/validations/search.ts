import { ValidateCNPJ } from '@/shared/utils/validations';
import { z } from 'zod';

export const SearchBusinessSchema = z
  .object({
    companyNumber: z.string(),
  })
  .refine(({ companyNumber }) => ValidateCNPJ(companyNumber), {
    path: ['companyNumber'],
    message: 'CNPJ inválido',
  });

export type TSearchBusinessSchema = z.infer<typeof SearchBusinessSchema>;
