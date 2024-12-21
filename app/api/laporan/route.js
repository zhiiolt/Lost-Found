/** @format */

import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";
import path from "path";
import fs from "fs";

// Import data
import {
  jenis as jenisLaporan,
  statuses as statusLaporan,
  kategori as kategoriLaporan,
} from "@/app/(user)/laporan/riwayat/data/data";

// Handler untuk GET request
export async function GET(request) {
  try {
    const laporan = Array.from({ length: 100 }, () => ({
      id: `LAP-${faker.number.int({ min: 1000, max: 9999 })}`,
      judul: faker.hacker
        .phrase()
        .replace(/^./, (letter) => letter.toUpperCase()),
      namaBarang: faker.commerce.productName(),
      deskripsi: faker.lorem.paragraph(),
      jenis: faker.helpers.arrayElement(jenisLaporan).value,
      status: faker.helpers.arrayElement(statusLaporan).value,
      kategori: faker.helpers.arrayElement(kategoriLaporan).value,
      tanggal: faker.date.between({
        from: new Date("2023-01-01"),
        to: new Date(),
      }),
      lokasi: faker.location.streetAddress(),
      ciri: faker.lorem.sentence({ max: 25 }),
      foto: faker.image.url(),
    }));

    // Path untuk menyimpan file
    const filePath = path.join(process.cwd(), "public", "laporan.json");

    // Tulis ke file laporan.json
    fs.writeFileSync(filePath, JSON.stringify(laporan, null, 2));

    console.log("✅ Laporan data generated.");

    // Kirim respon JSON
    return NextResponse.json({
      message: "Laporan data generated successfully.",
      filePath: `/laporan.json`,
    });
  } catch (error) {
    console.error("❌ Error generating laporan data:", error);
    return NextResponse.json(
      { message: "Error generating laporan data." },
      { status: 500 }
    );
  }
}
