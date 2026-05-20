"use client";

import BookingInfo from "@/components/BookingInfo";
import ProfileInfo from "@/components/ProfileInfo";
import { useState } from "react";

const DashboardContent = ({ bookings }) => {
  const [activeTab, setActiveTab] = useState("appointments");

  return (
    <div className="flex flex-col gap-10 p-10">
      
      <div className="flex items-center gap-4">
        <button onClick={() => setActiveTab("appointments")} className={`px-4 py-2 rounded-lg ${
            activeTab === "appointments"
              ? "bg-[#0a9396] text-white font-bold"
              : "border-2 rounded-lg border-[#0a9396] text-[#0a9396] font-bold"
          }`}>
          Appointments
        </button>

        <button onClick={() => setActiveTab("profile")} className={`px-4 py-2 rounded-lg ${
            activeTab === "profile"
              ? "bg-[#0a9396] text-white font-bold"
              : "border-2 rounded-lg border-[#0a9396] text-[#0a9396] font-bold"
          }`}>
          Profile
        </button>
      </div>

      <div className="flex-1">
        {activeTab === "appointments" && (
          <BookingInfo bookings={bookings} />
        )}

        {activeTab === "profile" && <ProfileInfo />}
      </div>
    </div>
  );
};

export default DashboardContent;