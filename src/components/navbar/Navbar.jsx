"use client";
import Image from "next/image";
import React from "react";
import NavLink from "./Navlink";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async()=>{
    await authClient.signOut();
    toast.warn("Logout successful")
  }
  return (
    <div className="z-50 fixed w-full top-0 left-0 shadow-md shadow-[#0a9396]">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2 text-md"
            >
              <NavLink href={"/"}>Home</NavLink>
              <NavLink href={"/all-appointment"}>All Appointment</NavLink>
              <NavLink href={"/dashboard"}>Dashboard</NavLink>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={"/logo.png"} height={40} width={40} alt="logo"></Image>
            <h1 className=" text-lg md:text-2xl font-bold text-[#005f73]">
              DocAppoint
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex items-center gap-5 text-lg font-bold menu menu-horizontal px-1">
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/all-appointment"}>All Appointment</NavLink>
            <NavLink href={"/dashboard"}>Dashboard</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-1 items-center">
              <Avatar>
                <Avatar.Image
                referrerPolicy="no-referrer"
                  alt={user?.name}
                  src={user?.image}
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <div>
                <Button onClick={handleLogout} variant="danger" className={'rounded-lg'}>Logout</Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-1">
              <Link href={"/login"}>
                <Button
                  variant="outline"
                  className={
                    "rounded-lg bg-linear-to-r from-[#005f73]/80 to-[#0a9396]/80 text-white"
                  }
                >
                  Login
                </Button>
              </Link>
              <Link href={"/register"}>
                <Button
                  variant="outline"
                  className={
                    "rounded-lg bg-linear-to-r from-[#005f73]/80 to-[#0a9396]/80 text-white"
                  }
                >
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
