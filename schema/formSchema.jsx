/** @format */

import * as z from "zod";

export const LaporanSchema = z.object({
  judul: z
    .string({
      required_error: "Judul tidak boleh kosong",
    })
    .min(1, {
      message: "Judul tidak boleh kosong",
    })
    .max(100, {
      message: "Judul terlalu panjang",
    }),
  namaBarang: z
    .string({
      required_error: "Nama barang tidak boleh kosong",
    })
    .min(1, {
      message: "Nama barang tidak boleh kosong",
    }),
  deskripsi: z
    .string({
      required_error: "Deskripsi tidak boleh kosong",
    })
    .min(1, {
      message: "Deskripsi tidak boleh kosong",
    }),
  jenis: z.string(),
  kategori: z.string({
    required_error: "Silakan pilih kategori",
  }),
  tanggal: z.date({
    required_error: "Pilih tanggal",
  }),
  status: z.string({
    required_error: "Silakan pilih status",
  }),
  lokasi: z
    .string({
      required_error: "Lokasi tidak boleh kosong",
    })
    .min(1, {
      message: "Lokasi tidak boleh kosong",
    }),
  ciri: z
    .string({
      required_error: "Ciri-ciri tidak boleh kosong",
    })
    .min(1, {
      message: "Ciri-ciri tidak boleh kosong",
    }),
  foto: z
    .instanceof(File)
    .refine(
      (file) => ["image/png", "image/jpeg", "image/jpg"].includes(file.type),
      { message: "Invalid image file type" }
    ),
});

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "Email tidak boleh kosong",
    })
    .email("Email tidak valid"),
  password: z
    .string({
      required_error: "Password tidak boleh kosong",
    })
    .min(8, {
      message: "Password minimal 8 karakter",
    }),
});

export const ProfilSchema = z.object({
  username: z
    .string()
    .min(3, "Username harus memiliki minimal 3 karakter")
    .max(20, "Username tidak boleh lebih dari 20 karakter")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username hanya boleh berisi huruf, angka, dan underscore"
    ),
  email: z.string().email("Email tidak valid"),
  password: z
    .string()
    .min(8, "Password harus memiliki minimal 8 karakter")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/,
      "Password harus mengandung huruf dan angka"
    ),
  fullName: z.string().min(1, "Nama lengkap tidak boleh kosong"),
  gender: z.enum(["pria", "wanita"], "Jenis kelamin tidak valid").optional(),
  birthdate: z
    .date()
    .refine(
      (date) => date <= new Date(),
      "Tanggal lahir tidak boleh di masa depan"
    )
    .optional(),
  address: z.string().optional(),
  birthdate: z
    .union([z.date(), z.null()]) // Menerima baik Date atau null
    .refine(
      (date) => !date || date <= new Date(),
      "Tanggal lahir tidak boleh di masa depan"
    )
    .optional(),
  profilePicture: z
    .union([
      // Gabungkan dua tipe: File atau String
      z.instanceof(File).refine((file) => file.size <= 5 * 1024 * 1024, {
        message: "File must be smaller than 5MB",
      }), // Validasi jika input berupa File
      z.string().optional(), // Validasi jika input berupa URL (string)
    ])
    .optional(),
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
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username hanya boleh berisi huruf, angka, dan underscore"
      ),
    email: z.string().email(),
    password: z
      .string()
      .min(8, {
        message: "Password minimal 8 karakter",
      })
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/,
        "Password harus mengandung huruf dan angka"
      ),
    confirmPassword: z.string().min(8, {
      message: "Password minimal 8 karakter",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });
