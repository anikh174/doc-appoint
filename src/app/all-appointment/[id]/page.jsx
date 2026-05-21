import BookModal from "@/components/book-modal/BookModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { CiHospital1 } from "react-icons/ci";
import { FaRegClock, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCalendar } from "react-icons/io";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;

  //   jwt token
  const {token} = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/doctors/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const specificDoctorDetails = await res.json();
  const {
    _id,
    totalReviews,
    availability,
    rating,
    fee,
    location,
    hospital,
    image,
    experience,
    specialty,
    name,
    description,
  } = specificDoctorDetails;
  return (
    <div className="mt-26 mb-10 max-w-7xl mx-auto">
      <div className="flex lg:flex-row flex-col gap-5">
        <div>
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="md:h-[300px] md:w-[300px] lg:h-[590px] lg:w-[500px] rounded-2xl mx-auto"
          ></Image>
        </div>

        <div className="space-y-5 p-2 md:w-[600px] mx-auto">
          <p className="bg-[#0a9396]/30 px-4 py-1 w-28 rounded-full text-[#005f73] font-semibold">
            {specialty}
          </p>
          <h2 className="text-2xl lg:text-5xl font-bold">{name}</h2>
          <p className="flex gap-1 items-center font-bold">
            <FaStar className="text-orange-300" />
            {rating}
            <span className="text-gray-500">/5.0</span>
          </p>
          <p className="text-lg font-semibold text-gray-500">{description}</p>

          <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 border-2 border-[#0a9396] rounded-2xl p-5 w-[100%]">
              <FaRegClock
                size={50}
                className="p-2 bg-[#0a9396]/30 text-[#005f73] rounded-lg"
              />
              <div>
                <p>Experience</p>
                <span className="font-bold text-lg">{experience}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 border-2 border-[#0a9396] rounded-2xl p-5 w-[100%]">
              <CiHospital1
                size={50}
                className="p-2 bg-[#0a9396]/30 text-[#005f73] rounded-lg"
              />
              <div>
                <p>Hospital</p>
                <span className="font-bold text-sm lg:text-sm">{hospital}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 border-2 border-[#0a9396] rounded-2xl p-5 w-[100%]">
              <FaLocationDot
                size={50}
                className="p-2 bg-[#0a9396]/30 text-[#005f73] rounded-lg"
              />
              <div>
                <p>Location</p>
                <span className="font-bold text-sm lg:text-md">{location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 border-2 border-[#0a9396] rounded-2xl p-5 w-[100%]">
              <IoIosCalendar
                size={50}
                className="p-2 bg-[#0a9396]/30 text-[#005f73] rounded-lg"
              />
              <div>
                <p>Consultation Fee</p>
                <span className="font-bold text-lg">$ {fee}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-lg">Availability</p>
            <div className="flex items-center gap-5">
              {availability?.map((a, ind) => (
                <p
                  key={ind}
                  className="bg-[#0a9396]/30 text-[#005f73] px-4 py-1 rounded-lg text-xs md:text-base"
                >
                  {a}
                </p>
              ))}
            </div>
          </div>

          <BookModal specificDoctorDetails={specificDoctorDetails}></BookModal>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
