import { z } from "zod";

import {
  regexCapitalLetters,
  regexLowerLetters,
  regexOneNumber,
  regexSpecialChar,
} from "@shared/utils";

export const UpdatePasswordSchema = z
  .object({
    currentPassword: z
      .string({ required_error: "Digite sua senha atual." })
      .min(1, "Digite sua senha atual."),

    newPassword: z
      .string({ required_error: "Digite uma nova senha." })
      .min(8, "A senha deve conter no mínimo 8 caracteres.")
      .regex(regexOneNumber, "A senha deve conter no mínimo um número.")
      .regex(
        regexSpecialChar,
        "A senha deve conter no mínimo um caractere especial."
      )
      .regex(regexLowerLetters, "A senha deve conter no mínimo uma letra.")
      .regex(
        regexCapitalLetters,
        "A senha deve conter no mínimo uma letra maiúscula."
      ),

    newPasswordConfirmation: z
      .string({ required_error: "Digite a senha novamente." })
      .min(1, "Digite a senha novamente."),
  })
  .superRefine(({ newPassword, newPasswordConfirmation }, ctx) => {
    if (newPassword !== newPasswordConfirmation) {
      ctx.addIssue({
        path: ["newPasswordConfirmation"],
        code: "custom",
        message: "As senhas digitadas não são iguais.",
      });
    }
  });

export type IFormUpdatePassword = z.infer<typeof UpdatePasswordSchema>;
