"use client";
import React from "react";
import Heading from "./common/CustomHeading";
import Description from "./common/CustomDiscription";
import { KICKBOX_PROCESS_LIST } from "@/utils/helper";
import Image from "next/image";
import CustomButton from "./common/CustomBtn";

const KickboxProcess = () => {
  return (
    <div className="pt-[129px] pb-36 max-md:py-20 max-sm:py-10">
      <div className="max-w-[1172px] mx-auto px-4">
        <Heading headingText="KICKBOX PROCESS" myClass="pb-[17px]" />
        <Description text="The Kickbox program at Implenia guides participants through three key phases to turn their ideas into impactful solutions: 1. RedBox for validation, 2. BlueBox for piloting, and 3. GoldBox for implementation. To progress through each phase, you’ll work to continuously optimize your idea and demonstrate its potential to internal Implenia sponsors." />
        <div className="flex items-center lg:gap-[51px] lg:pt-12 max-lg:flex-wrap -mx-3 justify-center">
          {KICKBOX_PROCESS_LIST.map((obj, i) => (
            <div
              key={i}
              className="h-full max-lg:w-1/2 max-sm:w-full px-3 max-lg:pt-12 max-md:pt-10"
            >
              <Image
                src={obj.image}
                width={227}
                height={92}
                alt={obj.imageAlt}
                className="mx-auto max-md:w-[150px] max-md:h-[60px]"
              />
              <div className="border border-black rounded-[28px] px-6 pt-8 max-sm:p-4 pb-[19px] mt-[39px] max-md:mt-7 max-sm:mt-4 h-full">
                <p
                  className={`${
                    i === 0
                      ? "text-lightRed"
                      : i === 1
                      ? "text-lightBlue"
                      : "text-goldBox"
                  } font-semibold text-customXl max-sm:text-lg leading-[21px]`}
                >
                  {obj.subTitle}
                </p>
                <h4 className="font-semibold text-[35px] max-md:text-3xl max-sm:text-2xl leading-[44px] py-2 max-sm:pt-0 max-sm:pb-1">
                  {obj.title}
                </h4>
                <Description
                  text={obj.description}
                  myClass="pb-7 max-sm:pb-5"
                />
                <Description text={obj.boxDuration} />
                <Description text={obj.budget} />
              </div>
            </div>
          ))}
        </div>
        <CustomButton
          myClass="!border-lightRed !text-lightRed hover:bg-lightRed hover:!text-white px-[44.9px] py-[15.5px] mt-[39px] max-sm:mt-7 max-lg:!mx-auto !flex"
          text="Start your RedBox!"
        />
      </div>
    </div>
  );
};

export default KickboxProcess;
