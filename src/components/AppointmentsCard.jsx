import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppointmentsCard = ({ doctor }) => {
  const {
    _id,
    totalReviews,
    rating,
    fee,
    location,
    hospital,
    image,
    experience,
    specialty,
    name,
  } = doctor;
  return (
    <div>
      <div
        className=" backdrop-blur-xl
bg-white/10
border border-white/20
rounded-lg
transition-all duration-500
hover:-translate-y-3
hover:bg-white/20
hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
overflow-hidden"
      >
        <Image
          src={image}
          alt="name"
          width={300}
          height={300}
          className="h-[300px] w-full transition-transform duration-500 hover:scale-110"
        ></Image>

        <div className="card-body">
          <h2 className="card-title flex justify-between">
            {name}
            <div className="badge bg-[#0a9396]/30 text-[#005f73] font-medium">
              {specialty}
            </div>
          </h2>

          <div>
            <p>{hospital}</p>
            <p>
              {location} | <span>{experience}</span>
            </p>
            <p className="flex justify-between items-center">
              <span>{rating}</span> <span>{totalReviews} reviews</span>
            </p>
            <p>
              $ {fee}/<span>visit</span>
            </p>
          </div>
        </div>
        <div className="p-2">
          <Link href={`all-appointment/${_id}`}>
            <Button
              className={
                "w-full rounded-none bg-[#0a9396]/80 text-xl font-bold"
              }
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsCard;
