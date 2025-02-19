"use client"
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HEADER_LIST } from '@/utils/helper'
const Header = () => {
    const [open, setOpen] = useState(false);
      const handleClick = () => {
        setOpen(!open);
      };

      const closeHandler = () => {
        setOpen(false);
    };
     useEffect(() => {
       const handleOverflow = () => {
         if (open && window.innerWidth < 768) {
           document.body.classList.add("overflow-hidden");
         } else {
           document.body.classList.remove("overflow-hidden");
         }
       };
       handleOverflow();
       window.addEventListener("resize", handleOverflow);
       return () => {
         window.removeEventListener("resize", handleOverflow);
       };
     }, [open]);

  return (
    <nav className="flex items-center justify-between bg-white py-[18px]">
      <Link href="/">
        <Image
          src="/assets/images/png/header-logo.png"
          alt="Logo"
          width={93}
          height={93}
          className="w-full object-cover max-w-[93px] max-md:max-w-14 max-sm:max-w-10"
        />
      </Link>
      <div
        className={`flex gap-[55px] max-xl:gap-10 max-md:fixed max-md:top-0 max-md:-right-full max-md:h-full max-md:w-full max-md:justify-center max-md:items-center transition-all duration-300 max-md:flex-col max-md:bg-white max-md:z-40 ${
          open ? "max-md:!right-0" : ""
        }`}
      >
        <div className="flex items-center gap-[38px] max-md:flex-col">
          {HEADER_LIST.map((item, index) => (
            <p key={index}>
              <Link
                className="text-black max-md:text-2xl max-sm:text-xl text-base font-bold leading-5 transition-all ease-linear duration-300 hover:text-[#EBA82C]"
                href={item.path}
              >
                {item.name}
              </Link>
            </p>
          ))}
        </div>
      </div>
      <button
        onClick={handleClick}
        className="flex flex-col items-center justify-between relative z-50 overflow-hidden h-5 w-6 md:hidden"
      >
        <span
          className={`w-6 h-0.5 transition-all duration-300 bg-black rounded-lg ${
            open ? "translate-x-10" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 transition-all duration-300 bg-black rounded-lg relative after:absolute after:top-0 after:left-0 after:w-6 after:h-0.5 after:bg-black after:rounded-lg ${
            open ? "after:rotate-90 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 transition-all duration-300 bg-black rounded-lg ${
            open ? " -translate-x-10" : ""
          }`}
        ></span>
      </button>
    </nav>
  );
}

export default Header