'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const ProfileInfo = () => {
  const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user)
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold">You Profile</h1>
      </div>

      <div className="space-y-3 mt-3">
        <Image src={user.image} alt={user.name} height={100} width={100}></Image>
      <h2 className="text-lg font-bold">
        <span className="text-2xl font-bold">Name:</span> {user.name}
      </h2>
      <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;