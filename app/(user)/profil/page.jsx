/** @format */

import Header from "@/app/(user)/header";
import { Profil } from "./components/Profil";
import photo from "@/assets/avatar/olly.jpg";

export const metadata = {
  title: "Lost & Found: Profil",
  description: "A task and issue tracker build using Tanstack Table.",
};

const user = {
  username: "_rforreyhan",
  email: "rizzzhan@gmail.com",
  password: "reyhanputras12",
  fullName: "Reyhan Putra Syailendra",
  gender: "pria",
  birthdate: null,
  address: "",
  phoneNumber: "",
  profilePicture: photo.src,
};

export default function ProfilPage() {
  const breadcrumbs = [
    { title: "Profil" },
    // halaman terakhir tanpa link
  ];
  return (
    <div>
      <Header breadcrumbs={breadcrumbs} />
      <div className='py-4 px-12'>
        <Profil user={user} />
      </div>
    </div>
  );
}
