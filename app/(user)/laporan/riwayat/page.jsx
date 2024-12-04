/** @format */

import Header from "@/app/(user)/header";

export default function RiwayatLaporanPage() {
  const breadcrumbs = [
    { title: "Laporan", url: "/laporan" },
    { title: "Laporan Saya" },
    // halaman terakhir tanpa link
  ];
  return (
    <div>
      <Header breadcrumbs={breadcrumbs} />
      <div className='p-4'>Halo ini Riwayat Laporan</div>
    </div>
  );
}
