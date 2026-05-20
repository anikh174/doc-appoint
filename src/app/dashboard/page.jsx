// app/dashboard/page.jsx

import DashboardContent from "./DashboardContent";

const DashboardPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/booking`);
  const bookings = await res.json();

  return (
    <div className="mt-20">
        <DashboardContent bookings={bookings} />
    </div>
  );
};

export default DashboardPage;