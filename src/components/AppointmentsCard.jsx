import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const AppointmentsCard = ({ doctor }) => {
  const {
    education,
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
      <div className=" bg-base-100 shadow-sm">
        <Image
          src={image}
          alt="name"
          width={300}
          height={300}
          className="h-[300px] w-full"
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
            <p>{location} | <span>{experience}</span></p>
            <p className="flex justify-between items-center"><span>{rating}</span> <span>{totalReviews} reviews</span></p>
            <p>$ {fee}/<span>visit</span></p>
          </div>
        </div>
        <div className="p-2">
          <Button className={'w-full rounded-none bg-[#0a9396]/80 text-xl font-bold'}>View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsCard;
