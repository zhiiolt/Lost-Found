/** @format */

import Header from "@/app/(user)/header";

export default function BuatLaporanPage() {
  const breadcrumbs = [
    { title: "Laporan", url: "/laporan" },
    { title: "Laporan Saya", url: "/laporan/riwayat" },
    { title: "Buat Laporan" },
    // halaman terakhir tanpa link
  ];
  return (
    <div>
      <Header breadcrumbs={breadcrumbs} />
      <div className='p-4'>Halo ini Buat Laporan</div>
    </div>
  );
}
