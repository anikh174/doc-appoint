import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#005f73] p-10">
      <div className="grid lg:grid-cols-4 grid-cols-2 justify-items-center gap-10">
        <div className="space-y-5">
          <div className="flex gap-2 items-center">
            <Image src={"/logo.png"} alt="logo" height={40} width={40} className="w-6 md:w-10 md:h-10 h-6"></Image>
            <h3 className="text-xl lg:text-3xl font-bold text-white">DocAppoint</h3>
          </div>

          <p className="text-[#0a9396] font-bold text-xs lg:text-base">Bangladesh's trusted platform for <br /> finding and booking doctor <br /> appointments online.</p>

          <div className="flex gap-2 items-center text-white">
            <span className="bg-[#0a9396] p-1 lg:p-2 rounded-2xl"><FaFacebook size={20} className="h-5 w-5"/></span>
            <span className="bg-[#0a9396] p-1 lg:p-2 rounded-2xl"><FaInstagram size={20} className="h-5 w-5"/></span>
            <span className="bg-[#0a9396] p-1 lg:p-2 rounded-2xl"><FaXTwitter size={20}  className="h-5 w-5"/></span>
            <span className="bg-[#0a9396] p-1 lg:p-2 rounded-2xl"><CiYoutube  size={20} className="h-5 w-5"/></span>
          </div>
        </div>

        <div className="space-y-5">
            <h3 className="text-xl lg:text-3xl font-bold text-white">Quick Links</h3>

            <div className="flex flex-col text-xs lg:text-base space-y-3 font-bold text-[#0a9396]">
              <Link href={'/'}>Home</Link>
              <Link href={'/all-appointment'}>All Appointment</Link>
              <Link href={'/dashboard'}>Dashboard</Link>
              <p>About Us</p>
            </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-xl lg:text-3xl font-bold text-white">Specialties</h3>

          <div className="flex flex-col gap-1 text-xs lg:text-base font-bold text-[#0a9396]">
            <p>Cardiology</p>
          <p>Neurology</p>
          <p>Orthopedics</p>
          <p>Pediatrics</p>
          <p>Dermatology</p>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-xl lg:text-3xl font-bold text-white">Contact</h3>

          <div className="space-y-3 text-[#0a9396] text-[10px] lg:text-base font-bold">
            <p>📍 Dhanmondi, Dhaka</p>
            <p>📞 +880 1700-000000</p>
            <p>✉️ hello@docappoint.com</p>
            <p>🕐 24/7 Support Available</p>
          </div>
        </div>
      </div>
      

        <div className="flex justify-between items-center border-t-2 border-[#0a9396] mt-5 pt-5 md:mx-10 text-white font-bold text-xs md:text-base">
          <p>© 2026 DocAppoint. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
    </div>
  );
};

export default Footer;
