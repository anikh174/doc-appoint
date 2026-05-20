import { Button } from "@heroui/react";

const BookingInfo = ({ bookings }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">My Booking</h2>
          <p>Manage your upcoming and past appointments</p>
        </div>
        <div>
          <Button className={'bg-[#0a9396] text-white font-bold rounded-lg'}>+ New Appointment</Button>
        </div>
      </div>

      <div className="flex items-center gap-5 my-5">
        <div className="text-center border border-[#0a9396] p-5 shadow-2xl rounded-lg">
          <span>{bookings.length}</span>
          <p>Total Booking</p>
        </div>
        <div className="text-center border border-[#0a9396] p-5 shadow-2xl rounded-lg">
          <span>{bookings.length}</span>
          <p>Total Booking</p>
        </div>
        <div className="text-center border border-[#0a9396] p-5 shadow-2xl rounded-lg">
          <span>{bookings.length}</span>
          <p>Total Booking</p>
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

            <div>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingInfo;
