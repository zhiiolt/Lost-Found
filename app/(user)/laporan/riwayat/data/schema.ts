/** @format */

import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export const laporanSchema = z.object({
  id: z.string(),
  judul: z.string(),
  jenis: z.string(),
  status: z.string(),
  kategori: z.string(),
  tanggal: z.string(),
  lokasi: z.string(),
});

export type Laporan = z.infer<typeof laporanSchema>;
