'use client'
import { Button } from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { DeleteAlert } from "./DeleteAlert";
import Link from "next/link";
import EditModal from "./edit-modal/EditModal";

const BookingInfo = ({ bookings }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-10 md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">My Booking</h2>
          <p>Manage your upcoming and past appointments</p>
        </div>
        <div>
          <Link href={'/all-appointment'}><Button className={'bg-[#0a9396] text-white font-bold rounded-lg'}>+ New Appointment</Button></Link>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 my-5">
        <div className="text-center border border-[#0a9396] p-5 shadow-2xl rounded-lg">
          <span>{bookings.length}</span>
          <p>Total Booking</p>
        </div>
        <div className="text-center border border-[#0a9396] p-5 shadow-2xl rounded-lg">
          <span>0</span>
          <p>Upcoming</p>
        </div>
        <div className="text-center border border-[#0a9396] p-5 shadow-2xl rounded-lg">
          <span>0</span>
          <p>Complete</p>
        </div>
      </div>
      <div className="space-y-10">
        {bookings.map((booking) => (
          <div className="border-2 shadow-2xl p-10 rounded-lg border-[#0a9396]" key={booking._id}>
            <div>
              <div>
                <h2>Doctor: {booking.docName}</h2>
                <h2>Patient: {booking.name}</h2>
                <p>Gender: {booking.gender}</p>
                <p>Date: {booking.departureDate}</p>
                <p>Time: {booking.appointmentTime}</p>
                <span>Reason: {booking.reason}</span>
              </div>

              <div className="mt-10">
                <h1>Patient's Contact Method</h1>
                <p>Email: {booking.email}</p>
                <p>Number: {booking.number}</p>
                <p></p>
              </div>
            </div>

            <div className="mt-5 gap-10 flex ">
              <EditModal booking={booking}></EditModal>
              <DeleteAlert booking={booking}></DeleteAlert>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingInfo;
