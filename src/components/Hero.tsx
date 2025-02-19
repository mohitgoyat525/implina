"use client";
import React, { useEffect } from "react";
import Header from "./common/Header";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="bg-center bg-cover bg-no-repeat bg-heroBgImg relative overflow-hidden">
      <div className="bg-white">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className=" container pt-[230px] pb-[226px] max-lg:py-44 max-md:py-24 max-sm:py-20 relative max-xl:z-20">
        <p className="text-white text-shadow text-customXl font-bold font-sans-bold leading-[21px] max-md:text-center">
          Shape the future of Implenia!
        </p>
        <h1 className="text-shadow relative z-20 max-md:text-center font-sans-bold text-white max-w-[727px] text-custom3Xl font-bold leading-[80px] max-lg:text-6xl max-md:text-5xl max-sm:text-4xl">
          WE ARE LOOKING FOR YOUR IDEA
        </h1>
        <button className="mt-6 shadow-[0px_4px_4px_0px_#00000040] max-sm:text-lg max-md:mx-auto max-sm:h-[47px] border border-solid border-white font-sans-bold text-white text-customXl font-bold leading-[21px] min-w-[312px] max-md:min-w-[270px] max-md:h-[57px] max-sm:min-w-[225px] h-[67px] rounded-full flex items-center justify-center transition-all ease-linear duration-300 hover:bg-black">
          Bring your idea to life!
        </button>
      </div>
      <Image
        data-aos="fade-up-right"
        src="/assets/images/webp/hero-left-img.webp"
        alt="cartoon"
        width={562}
        height={562}
        className="pointer-events-none object-cover max-w-[478px] absolute bottom-[-73px] left-0 max-xl:max-w-[320px] max-lg:max-w-[200px] max-sm:max-w-[100px] max-lg:bottom-0"
      />
    </div>
  );
};

export default Hero;
