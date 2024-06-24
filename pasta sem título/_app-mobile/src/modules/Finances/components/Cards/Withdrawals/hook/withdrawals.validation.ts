import { z } from "zod";

export const FormNewWithdrawalsSchema = z.object({
  value: z
    .string({ required_error: "O valor mínimo é de R$ 5,00." })
    .min(3, "O valor mínimo é de R$ 5,00."),
});

export type IFormNewWithdrawalsSchema = z.infer<
  typeof FormNewWithdrawalsSchema
>;
