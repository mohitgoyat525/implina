"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Description from "./common/CustomDiscription";
import CustomBtn from "./common/CustomBtn";
import CustomHeading from "./common/CustomHeading";
import { SLIDER_LIST } from "@/utils/helper";


const OurCommunity = () => {
  return (
    <div className="py-[129.5px] px-4 flex flex-col items-start max-lg:items-center max-xl:py-28 max-lg:pb-10 max-lg:pt-20 max-md:pt-14 bg-offWhite">
      <div className="container mx-auto relative">
        <div className="absolute top-[58%] -translate-y-1/2 flex rotate-90 left-0 prev-button z-50 cursor-pointer size-10 max-lg:hidden">
          <span className="w-6 h-[2px] bg-black rotate-45 translate-y-1 translate-x-[9.5px]"></span>
          <span className="w-6 h-[2px] bg-black -rotate-45 translate-y-1 translate-x-0.5"></span>
        </div>
        <div className="absolute top-[58%] -translate-y-1/2 flex -rotate-90 right-0 next-button z-50 cursor-pointer size-10 max-lg:hidden">
          <span className="w-6 h-[2px] bg-black rotate-45 translate-y-1 translate-x-[9.5px]"></span>
          <span className="w-6 h-[2px] bg-black -rotate-45 translate-y-1 translate-x-0.5"></span>
        </div>

        <CustomHeading
          headingText="WHAT OUR COMMUNITY SAYS"
          myClass="max-md:text-center"
        />

        <div className="pt-36 max-lg:pt-28 max-md:pt-14 max-sm:pt-8">
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[Navigation, Pagination]}
            className="max-w-[795px] mx-auto mySwiper"
          >
            <div className="swiper-pagination max-lg:block hidden"></div>

            {SLIDER_LIST.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="text-center max-lg:pb-[100px] max-md:pb-[55px]"
              >
                <Image
                  src={slide.semiColonSrc}
                  alt="semi-colon"
                  width={127}
                  height={44}
                  className="max-w-[127px] mx-auto mb-[40px] h-[44px]"
                />
                <p className="text-[32px] max-md:text-2xl max-sm:text-xl font-semibold font-sans-semibold max-w-[795px] mx-auto text-center leading-custom-2xl">
                  {slide.descriptionText}
                </p>
                <div className="text-start flex items-center max-md:justify-center gap-3.5 pl-[84px] max-md:pl-0 pt-[30px] max-sm:pt-5">
                  <Image
                    width={80}
                    height={80}
                    className="object-cover"
                    src={slide.userImgSrc}
                    alt="user"
                  />
                  <div>
                    <Description
                      text={slide.role}
                      myClass="!text-[#8F9090] font-semibold font-sans-semibold tracking-normal leading-custom-xs"
                    />
                    <Description
                      text={slide.name}
                      myClass="font-semibold font-sans-semibold tracking-normal leading-custom-xs"
                    />
                  </div>
                </div>
                <CustomBtn
                  text="Join the community!"
                  myClass="!text-lightRed mx-auto mt-[62px] max-lg:mt-10 max-md:mt-8 border-lightRed rounded-full min-w-[268px] h-[58px] flex items-center justify-center max-sm:text-lg hover:!text-white hover:bg-lightRed max-sm:h-[47px] max-sm:min-w-[225px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
