import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaClock, FaRegCalendarCheck, FaStar, FaUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="mt-16">
      <div
        className="h-[550px] md:h-[400px] lg:h-[600px] md:h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg2.jpg')",
        }}
      >
        <div className="flex flex-col md:flex-row gap-5 lg:gap-10 justify-between items-center h-full bg-black/60 px-5 py-10 lg:px-50">
          <div className="space-y-3 md:space-y-5 lg:space-y-8 text-left">
            <p className="text-[10px] md:text-xs lg:text-lg text-white bg-[#0a9396]/30 px-4 py-1 w-60 md:w-70 lg:w-100 rounded-full">🏥 Bangladesh's #1 Doctor Booking Platform</p>

            <h1 className="text-white text-4xl lg:text-6xl font-bold">Find & Book Top <br /> Doctors Near You</h1>

            <p className="text-white font-semibold text-xs md:text-md lg:text-xl">
              Connect with 500+ verified specialists. Book appointments <br />
              instantly, manage your health journey with ease.
            </p>

            <div className="flex items-center gap-3 my-5">
              <Button className={'flex items-center bg-linear-to-r from-[#0a9396] to-[#0a9396]/50'}><CiSearch />Browse Doctors</Button>
              <Button className={'flex items-center border-2 border-[#0a9396] bg-black/10'}><FaRegCalendarCheck />My Booking</Button>
            </div>

            <div className="flex justify-center items-center md:justify-start gap-3 lg:gap-10">
              <div className=" bg-linear-to-t from-black/00 to-black/50 p-2 rounded-lg">
                <h4 className="text-[#48cae4] font-bold lg:text-xl flex justify-center gap-1"> <FaUserDoctor></FaUserDoctor> 500+</h4>
                <p className="text-sm lg:text-lg text-white font-semi-bold">Verified Doctors</p>
              </div>
              <div className=" bg-linear-to-t from-black/00 to-black/50 p-2 rounded-lg">
                <h4 className="text-[#48cae4] font-bold flex lg:text-xl justify-center gap-1">4.9 <FaStar></FaStar></h4>
                <p className="text-sm lg:text-lg text-white font-semi-bold">Average Rating</p>
              </div>
              <div className=" bg-linear-to-t from-black/00 to-black/50 p-2 rounded-lg md:w-30 lg:w-40 text-center">
                <h4 className="text-[#48cae4] font-bold flex lg:text-xl justify-center gap-1"><FaClock></FaClock> 24/7</h4>
                <p className="text-sm lg:text-lg text-white font-semi-bold">Support</p>
              </div>
            </div>
          </div>

          <div>
            <Image
              src={"/heroimg.png"}
              width={400}
              height={400}
              alt="bg-image"
              className="rounded-full shadow-md shadow-white border-5 border-[#0a9396] w-40 h-40 md:w-60 md:h-60 lg:w-[100%] lg:h-[100%]"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
