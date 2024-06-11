"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "/public/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-screen fixed top-[0%] z-10">
      <div className=" bg-white border-[1px] md:bg-[#1a1c1e] md:border-none">
        <div className="flex justify-between items-center h-20 max-w-[1450px] m-auto px-4 text-white z-[20px]">
          <div className="flex h-20 " style={{ color: "#1a1c1e" }}>
            <div onClick={handleNav} className="block md:hidden">
              {nav ? (
                <AiOutlineClose size={30} className="my-6" />
              ) : (
                <AiOutlineMenu size={30} className="my-6" />
              )}
            </div>
            <Image
              src={Logo}
              alt="Blitz Logo"
              className="h-full w-full object-cover invert md:filter-none"
            />
          </div>

          <ul className="hidden md:flex max-w-[1450px]">
            <li className="p-4">Home</li>
            <li className="p-4">About</li>
            <li className="p-4">Products</li>
            <li className="p-4">Teams</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-20 w-[100%] h-full border-r border-r-slate-100 bg-white opacity-90 ease-in-out duration-500 "
              : "fixed left-[-100%] ease-in-out duration-500"
          }
        >
          <ul className="p-4">
            <li className="p-4 border-b  border-slate-100">Home</li>
            <li className="p-4 border-b border-slate-100">About Us</li>
            <li className="p-4 border-b border-slate-100">Products</li>
            <li className="p-4 border-b border-slate-100">Teams</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
