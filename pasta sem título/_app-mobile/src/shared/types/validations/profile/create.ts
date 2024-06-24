import { z } from "zod";

export const CreateBusinessSchema = z.object({
  nickname: z
    .string({ required_error: "Informe seu apelido." })
    .min(3, "Informe seu apelido.")
    .nullable(),
});

export type IFormNewBusinessSchema = z.infer<typeof CreateBusinessSchema>;
