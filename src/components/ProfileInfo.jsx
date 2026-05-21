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
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-bold">
          My profile <br />{" "}
          <span className="text-sm text-gray-500">
            View and update your personal information
          </span>
        </h1>
      </div>
      <div className="mx-auto border-t-5 border-b-5 shadow-sm shadow-[#0a9396] border-[#0a9396] rounded-2xl lg:w-[50%]">
        <figure className="p-5 flex flex-col md:flex-row md:justify-center gap-5 md:gap-10 lg:gap-20 items-center">
          <div>
            <Image
              src={user?.image}
              alt={user?.name}
              height={200}
              width={200}
              className="mx-auto rounded-full border-4 border-[#0a9396] shadow-sm shadow-[#0a9396]"
            ></Image>
          </div>

          <div className="border-l-5 rounded-lg p-3 shadow-2xl">
            <div className="flex gap-3">
              <p className="md:text-3xl">Name:</p>
              <h2 className="text-center md:text-3xl font-bold bg-linear-to-r from-[#0a9396] to-[#0a9396]/50 bg-clip-text text-transparent">
                {user?.name}
              </h2>
            </div>
            <div className="flex gap-3">
              <p className="md:text-3xl">Email:</p>
              <p className="text-center md:text-xl md:mt-2 text-gray-500 font-bold">
                {user?.email}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-zinc-600 mt-5">
              Welcome back,{" "}
              <span className="font-semibold text-[#0a9396]">{user?.name}</span> 👋 <br />
              Thank you for being a part of DocAppoint.
            </p>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default ProfileInfo;
