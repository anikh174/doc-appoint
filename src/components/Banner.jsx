import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="h-[400px] lg:h-[600px] md:h-[400px] bg-black bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg2.jpg')",
        }}
      >
        <div className="flex flex-col md:flex-row gap-5 lg:gap-10 justify-between items-center h-full bg-black/50 px-5 py-10 lg:px-50">
          <div className="space-y-3 md:space-y-5 lg:space-y-8 text-left">
            <p className="text-[10px] md:text-xs lg:text-lg text-white bg-[#0a9396]/30 px-4 py-1 w-60 md:w-70 lg:w-100 rounded-full">🏥 Bangladesh's #1 Doctor Booking Platform</p>

            <h1 className="text-white text-4xl lg:text-6xl font-bold">Find & Book Top <br /> Doctors Near You</h1>

            <p className="text-white font-semibold text-xs md:text-md lg:text-xl">
              Connect with 500+ verified specialists. Book appointments <br />
              instantly, manage your health journey with ease.
            </p>
            <p></p>
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
