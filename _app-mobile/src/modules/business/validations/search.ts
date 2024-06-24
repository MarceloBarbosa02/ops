import { z } from 'zod';

export const SearchBusinessSchema = z.object({
  companyNumber: z.string().nullable(),
});

export type TSearchBusinessSchema = z.infer<typeof SearchBusinessSchema>;
