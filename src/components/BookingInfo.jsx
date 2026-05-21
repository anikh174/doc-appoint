'use client'
import { Button } from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { DeleteAlert } from "./DeleteAlert";
import Link from "next/link";
import EditModal from "./edit-modal/EditModal";

const BookingInfo = ({ bookings }) => {
  return (
    <div className="max-w-7xl mx-auto lg:w-[50%]">
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">My Booking</h2>
          <p>Manage your upcoming and past appointments</p>
        </div>
        <div>
          <Link href={'/all-appointment'}><Button className={'bg-[#0a9396] text-white font-bold rounded-lg w-[100%]'}>+ New Appointment</Button></Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 my-5">
        <div className="text-center border border-[#0a9396] p-5 shadow-2xl rounded-lg w-[100%] md:w-40">
          <span>0</span>
          <p>Complete</p>
        </div>
        <div className="text-center border border-[#0a9396] p-5 shadow-2xl rounded-lg w-[100%] md:w-40">
          <span>0</span>
          <p>Upcoming</p>
        </div>
        <div className="text-center border border-[#0a9396] p-5 shadow-2xl rounded-lg w-[100%] md:w-40">
          <span>{bookings.length}</span>
          <p>Total Booking</p>
        </div>
      </div>
      <div className="space-y-10">
        {bookings.map((booking) => (
          <div className="border-l-8 shadow-2xl p-3 rounded-lg border-l-black" key={booking._id}>
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="border-t-2 border-l-5 border-[#0a9396] rounded-lg p-3 w-full">
                <h2 className="text-xl text-bold text-center mb-5 border-b-2">Doctor: {booking.docName}</h2>
                <h2>Patient: {booking.name}</h2>
                <p>Gender: {booking.gender}</p>
                <p>Date: {booking.departureDate}</p>
                <p>Time: {booking.appointmentTime}</p>
                <span>Reason: {booking.reason}</span>
              </div>

              <div className="border-r-5 border-b-2 border-[#0a9396] rounded-lg p-3 w-full">
                <div>
                <h1 className="text-xl text-bold text-center mb-5 border-b-2">Patient's Contact Method</h1>
                <p>Email: {booking.email}</p>
                <p>Number: {booking.number}</p>
              </div>

              <div className="mt-2 justify-center gap-5 flex border-l-2 border-r-2 border-[#0a9396] rounded-lg p-3 bg-[#0a9396]/10">
              <EditModal booking={booking}></EditModal>
              <DeleteAlert booking={booking}></DeleteAlert>
            </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingInfo;
