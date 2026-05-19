import AppointmentsCard from "@/components/AppointmentsCard";
import React from "react";

const AllAppointmentPage = async () => {
  const res = await fetch("http://localhost:5000/doctors");
  const doctors = await res.json();
  console.log(doctors);
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

        <div className="my-10 space-y-3 max-w-7xl mx-auto">
          <p>{doctors.length} doctors found</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doctor) => (
              <AppointmentsCard  key={doctor._id} doctor={doctor}></AppointmentsCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAppointmentPage;
