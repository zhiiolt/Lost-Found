/** @format */

import Header from "@/app/(user)/header";

export default function DashboardPage() {
  const breadcrumbs = [
    { title: "Dashboard" },
    // halaman terakhir tanpa link
  ];
  return (
    <div>
      <Header breadcrumbs={breadcrumbs} />
      <div className='p-4'>Halo ini dashboard</div>
    </div>
  );
}
