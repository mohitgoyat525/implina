"use client"
import React, { useState } from "react";
import CustomHeading from "./common/CustomHeading";
import { KICKBOX_LIST } from "@/utils/helper";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const ImpelinaBox = () => {
  const [count, setCount] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) =>setCount(inView),
  });
  interface CustomHeadingProps {
    headingText: string;
    myClass: string;
  }
  return (
    <div className=" container pt-[134px] pb-[128px] max-xl:py-24 max-lg:py-20 max-md:py-14 max-sm:py-10">
      <CustomHeading headingText="IMPLENIA KICKBOX" myClass="max-md:text-center" />
      <p className="text-darkBlack text-customXl font-light font-sans-light leading-7 pt-4 max-md:text-center">
        Since 2019, our Kickbox Intrapreneurship Program has been inspiring
        employees across all divisions to turn their ideas into impactful
        solutions. From validating ideas (RedBox) to piloting projects (BlueBox)
        and driving implementation (GoldBox), Kickbox provides the tools and
        support to shape the future of Implenia. Become an intrapreneur yourself
        and bring your idea to life!
      </p>
      <div className="flex items-center justify-between mt-5 max-lg:flex-wrap gap-9">
        <div ref={ref} className="flex items-center gap-[71px] max-lg:gap-10 max-md:gap-5 flex-wrap max-md:justify-center">
          {KICKBOX_LIST.map((item, i) => (
            <div key={i} className="flex items-center flex-col">
              <p className="font-normal text-custom4xl font-sans-regular leading-[100px] text-offYellow max-xl:text-6xl  max-md:text-5xl max-sm:text-4xl">
                + <CountUp start={0} end={count && i === 0 ? 155:count && i === 1 ? 325 : i === 2 ? 250:0} duration={100}/>
              </p>
              <p className="font-bold font-sans-bold text-customXl leading-[21px]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <button className="text-lightRed max-md:mx-auto border border-solid border-lightRed rounded-full min-w-[268px] h-[58px] flex items-center justify-center font-bold font-sans-bold text-customXl max-sm:text-lg leading-[21px] transition-all ease-linear duration-300 hover:text-white hover:bg-lightRed max-sm:h-[47px] max-sm:min-w-[225px]">
          Submit your idea!
        </button>
      </div>
    </div>
  );
};

export default ImpelinaBox;
