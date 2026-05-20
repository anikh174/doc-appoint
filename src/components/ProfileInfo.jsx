'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const ProfileInfo = () => {
  const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user)
  return (
    <div>
      <div>
        <h1>You Profile</h1>
      </div>

      <div>
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