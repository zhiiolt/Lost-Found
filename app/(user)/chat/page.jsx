/** @format */

import Header from "@/app/(user)/header";

export default function ChatPage() {
  const breadcrumbs = [
    { title: "Chat" },
    // halaman terakhir tanpa link
  ];
  return (
    <div>
      <Header breadcrumbs={breadcrumbs} />
      <div className='p-4'>Halo ini Chat</div>
    </div>
  );
}
