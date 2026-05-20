import React from "react";
import AppointmentsCard from "./AppointmentsCard";
import { Button } from "@heroui/react";
import { BiRightArrow } from "react-icons/bi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";

const TopSpecialists = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/doctors`);
  const doctors = await res.json();
  console.log(doctors);
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" my-10 flex items-center md:justify-between flex-wrap gap-5">
        <div className="space-y-3">
          <p className="text-[#0a9396] font-bold text-lg md:text-xl">
            Top Specialists
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#005f73] font-bold">
            Highest Rated Doctors
          </h2>
          <p className="text-gray-500 text-sm md:text-lg">
            Our top-rated doctors based on patient feedback and success rates
          </p>
        </div>

        <div>
          <Link href={"/all-appointment"}>
            <Button
              variant="outline"
              className={
                "text-lg font-semibold rounded-lg flex items-center border-2 border-[#005f73] text-[#0a9396]"
              }
            >
              View All <MdOutlineArrowRightAlt />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {doctors.map((doctor) => (
          <AppointmentsCard key={doctor._id} doctor={doctor}></AppointmentsCard>
        ))}
      </div>
    </div>
  );
};

export default TopSpecialists;
