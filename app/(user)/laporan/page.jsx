/** @format */

import Header from "../header";

export default function LaporanPage() {
  const breadcrumbs = [
    { title: "Laporan" },
    // halaman terakhir tanpa link
  ];
  return (
    <div>
      <Header breadcrumbs={breadcrumbs} />
      <div className='p-4'>Halo ini Laporan</div>
    </div>
  );
}
