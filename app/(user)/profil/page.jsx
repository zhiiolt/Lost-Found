/** @format */

import Header from "@/app/(user)/header";

export default function ProfilPage() {
  const breadcrumbs = [
    { title: "Profil" },
    // halaman terakhir tanpa link
  ];
  return (
    <div>
      <Header breadcrumbs={breadcrumbs} />
      <div className='p-4'>Halo ini Profil</div>
    </div>
  );
}
