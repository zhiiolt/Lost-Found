/** @format */

import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email tidak boleh kosong",
    })
    .email({
      message: "Email tidak valid",
    }),
  password: z.string().min(1, {
    message: "Password tidak boleh kosong",
  }),
});

export const RegisterSchema = z
  .object({
    name: z.string().min(1, {
      message: "Nama tidak boleh kosong",
    }),
    username: z
      .string()
      .min(1, {
        message: "Username tidak boleh kosong",
      })
      .regex(/^\S+$/, {
        message: "Username tidak boleh mengandung spasi",
      }),
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password minimal 8 karakter",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password minimal 8 karakter",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });
