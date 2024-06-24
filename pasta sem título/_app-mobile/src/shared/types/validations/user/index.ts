import {
  regexCapitalLetters,
  regexLowerLetters,
  regexOneNumber,
  regexSpecialChar,
} from "@shared/utils";
import { z } from "zod";

export const CreateUserSchema = z
  .object({
    name: z
      .string({ required_error: "Informe seu nome." })
      .regex(/\s/g, "Informe seu nome completo")
      .min(3, "Informe seu nome."),

    phone: z
      .string({ required_error: "Informe seu celular." })
      .regex(
        /^(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{4})-?(\d{4}))$/,
        "Informe um celular válido."
      )
      .min(1, "Informe um celular válido."),

    new_email: z
      .string({ required_error: "Informe seu e-mail." })
      .email("Informe um e-mail valido.")
      .min(1, "Informe seu e-mail.")
      .max(60, "O email deve ter no máximo 60 caracteres"),

    new_password: z
      .string({ required_error: "Informe uma senha." })
      .min(1, "Preencha com a nova senha.")
      .min(8, "Sua senha deve ter no mínimo 8 caracteres.")
      .regex(regexOneNumber, "Senha deve conter pelo menos um número.")
      .regex(regexSpecialChar, "Senha deve conter caracteres especiais.")
      .regex(
        regexCapitalLetters,
        "Senha deve conter pelo menos uma letra maiúscula."
      )
      .regex(
        regexLowerLetters,
        "Senha deve conter pelo menos uma letra minúscula."
      ),

    password_confirm: z.string({ required_error: "Informe uma senha." }),
  })
  .superRefine(({ password_confirm, new_password, phone }, ctx) => {
    if (password_confirm !== new_password) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: "custom",
        message: "Senha e confirmação não são iguais.",
      });
    }

    const countryCode = phone.slice(0, 2);
    if (countryCode === "55" && phone.length < 13) {
      ctx.addIssue({
        path: ["phone"],
        code: "custom",
        message: "Celular inválido",
      });
    }
  });

export type IFormNewUserSchema = z.infer<typeof CreateUserSchema>;
