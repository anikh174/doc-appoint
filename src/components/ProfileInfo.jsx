"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";

const ProfileInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  return (
    <div className="space-y-5">
      {/* <div>
        <h1 className="text-2xl lg:text-3xl font-bold">You Profile</h1>
      </div>

      <div className="space-y-3 mt-3">
        <Image src={user.image} alt={user.name} height={100} width={100}></Image>
      <h2 className="text-lg font-bold">
        <span className="text-2xl font-bold">Name:</span> {user.name}
      </h2>
      <p>Email: {user.email}</p>
      </div> */}

      <div className="w-80 md:w-96 mx-auto border-t-5 border-b-5 shadow-sm shadow-[#0a9396] border-[#0a9396] rounded-2xl">
        <figure className="p-5">
          <Image
            src={user?.image}
            alt={user?.name}
            height={200}
            width={200}
            className="mx-auto rounded-full border-4 border-[#0a9396] shadow-sm shadow-[#0a9396]"
          ></Image>

          <h2 className="mt-5 text-center text-4xl font-bold bg-linear-to-r from-[#0a9396] to-[#0a9396]/50 bg-clip-text text-transparent">
            {user?.name}
          </h2>
          <p className="text-center text-sm mt-2 text-gray-500 font-bold">
            <span className="text-lg">Email:</span> {user?.email}
          </p>
        </figure>

        <div className="flex justify-center mb-5">
          <button
            className="border-b-4 border-orange-300 text-orange-300 px-4 py-1 cursor-pointer flex rounded-full gap-1 items-center font-semibold"
          >
            <BiEdit></BiEdit>Update your information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
