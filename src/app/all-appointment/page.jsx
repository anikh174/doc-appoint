import AppointmentsCard from "@/components/AppointmentsCard";
import React from "react";
import { SearchField, Label, Description, FieldError } from "@heroui/react";

// add meta data
export const metadata = {
  title: "Appointments - Doc-Appoint",
};

const AllAppointmentPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/doctors`);
  const doctors = await res.json();
  return (
    <div className="mt-16">
      <div>
        <div className="bg-linear-to-l from-[#0a9396] to-[#005f73] py-10 px-5 md:p-14 lg:p-20 text-center space-y-3 md:space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            All Appointments
          </h2>
          <p className="text-sm md:text-xl text-white font-bold">
            Browse and book from our verified specialist doctors
          </p>
        </div>
        <div className="px-5 lg:px-0">
          <SearchField className={'lg:w-[600px] w-[100%] mx-auto mt-5'}>
            <Label />
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input />
              <SearchField.ClearButton />
            </SearchField.Group>
            <Description />
            <FieldError />
          </SearchField>
        </div>
        <div className="my-10 space-y-3 max-w-7xl mx-auto px-5 lg:px-0">
          <p className="font-bold text-2xl">{doctors.length} <span className="text-gray-500 text-lg">doctors found</span></p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doctor) => (
              <AppointmentsCard
                key={doctor._id}
                doctor={doctor}
              ></AppointmentsCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAppointmentPage;
