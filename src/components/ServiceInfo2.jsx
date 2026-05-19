import React from "react";
import { FaCalendarAlt, FaRegHospital, FaSearch } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { LuBookCheck } from "react-icons/lu";

const ServiceInfo2 = () => {
  return (
    <div className="my-16">
      <div className="text-center">
        <p className="text-[#0a9396] text-xl font-semibold">Simple Process</p>
        <h3 className="text-[#005f73] text-2xl md:text-3xl lg:text-5xl font-bold mt-3">How DocAppoint Works</h3>

        <div className="my-10 flex max-w-7xl mx-auto gap-10 flex-wrap justify-center">
          <div className="space-y-3">
            <FcSearch size={30} className="mx-auto bg-[#0a9396]/50 p-3 lg:p-5 h-16 w-16 lg:h-20 lg:w-20 rounded-2xl" />
            <span className="text-[#0a9396] font-semibold">STEP 1</span>
            <h1 className="text-[#005f73]  text-lg lg:text-2xl font-bold">Search Doctor</h1>
            <p className="text-gray-500 text-lg">Browse our extensive directory of <br /> verified specialist doctors</p>
          </div>
          <div className="space-y-3">
            <FaCalendarAlt size={30} className="mx-auto bg-[#0a9396]/50 p-3 lg:p-5 h-16 w-16 lg:h-20 lg:w-20 rounded-2xl" />
            <span className="text-[#0a9396] font-semibold">STEP 2</span>
            <h1 className="text-[#005f73] text-lg lg:text-2xl font-bold">Choose Slot</h1>
            <p className="text-gray-500 text-lg">Pick a convenient date and time that <br /> works best for you</p>
          </div>
          <div className="space-y-3">
            <LuBookCheck size={30} className="mx-auto bg-[#0a9396]/50 p-3 lg:p-5 h-16 w-16 lg:h-20 lg:w-20 rounded-2xl" />
            <span className="text-[#0a9396] font-semibold">STEP 3</span>
            <h1 className="text-[#005f73] text-lg lg:text-2xl font-bold">Book Online</h1>
            <p className="text-gray-500 text-lg">Confirm your appointment instantly <br /> with a few simple steps</p>
          </div>
          <div className="space-y-3">
            <FaRegHospital size={30} className="mx-auto bg-[#0a9396]/50 p-3 lg:p-5 h-16 w-16 lg:h-20 lg:w-20 rounded-2xl" />
            <span className="text-[#0a9396] font-semibold">STEP 4</span>
            <h1 className="text-[#005f73] text-lg lg:text-2xl font-bold">Visit Clinic</h1>
            <p className="text-gray-500 text-lg">Show up at the clinic and receive <br /> expert medical care</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo2;
