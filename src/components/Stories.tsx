"use client";
import React from "react";
import CustomButton from "./common/CustomBtn";
import { STORIES_LIST } from "@/utils/helper";
import Image from "next/image";
import CustomHeading from "./common/CustomHeading";


const Stories = () => {
  return (
    <div id="stories" className="pt-32 pb-36 max-md:py-20 max-sm:py-12">
      <div className="max-w-[1103px] mx-auto px-4">
        <CustomHeading
          myClass="max-md:text-center"
          headingText="INTRAPRENEURSHIP STORIES"
        />
        <div className="flex -mx-[25.5px] max-lg:-mx-3 max-md:flex-wrap justify-center">
          {STORIES_LIST.map((obj ,i) => (
            <div
              key={i}
              className="w-1/3 max-md:w-1/2 max-sm:w-full px-[25.5px] max-lg:px-3 pt-[25px]"
            >
              <div className="border border-black rounded-[28px] h-full overflow-hidden">
                <Image
                  src={obj.image}
                  alt={obj.imageAlt}
                  width={323}
                  height={207}
                  className="w-full max-sm:h-[180px] object-cover rounded-[28px]"
                />
                <p className="font-semibold text-[35px] max-lg:text-3xl max-sm:text-2xl leading-[44px] pt-[51px] pb-16 px-6">
                  {obj.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <CustomButton
          myClass="!border-lightRed !text-lightRed hover:bg-lightRed hover:!text-white px-[74.18px] py-[15.5px] mt-[39px] max-sm:mt-7 max-md:!mx-auto !flex"
          text="More Stories"
        />
      </div>
    </div>
  );
};

export default Stories;
