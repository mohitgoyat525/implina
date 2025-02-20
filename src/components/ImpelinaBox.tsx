"use client"
import React, { useState } from "react";
import CustomHeading from "./common/CustomHeading";
import { KICKBOX_LIST } from "@/utils/helper";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import CustomBtn from "./common/CustomBtn";

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
      <p className="text-darkBlack text-customXl font-light leading-[27px] pt-4 max-md:text-center max-md:text-lg">
        Since 2019, our Kickbox Intrapreneurship Program has been inspiring
        employees across all divisions to turn their ideas into impactful
        solutions. From validating ideas (RedBox) to piloting projects (BlueBox)
        and driving implementation (GoldBox), Kickbox provides the tools and
        support to shape the future of Implenia. Become an intrapreneur yourself
        and bring your idea to life!
      </p>
      <div className="flex items-center justify-between mt-5 max-lg:flex-wrap gap-9">
        <div ref={ref} className="flex items-center gap-[71px] max-lg:gap-10 max-md:gap-5 max-lg:flex-wrap max-md:justify-center">
          {KICKBOX_LIST.map((item, i) => (
            <div key={i} className="flex items-center flex-col">
              <p className="font-normal text-custom4xl font-sans-regular leading-[100px] text-offYellow max-xl:text-6xl  max-md:text-5xl max-sm:text-4xl">
                +<CountUp start={0} end={count && i === 0 ? 155:count && i === 1 ? 325 : i === 2 ? 250:0} duration={5}/>
              </p>
              <p className="font-bold font-sans-bold text-customXl leading-[21px] whitespace-nowrap">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <CustomBtn text="Submit your idea!" myClass="text-lightRed max-md:mx-auto border-lightRed rounded-full min-w-[268px] h-[58px] flex items-center justify-center max-sm:text-lg hover:text-white hover:bg-lightRed max-sm:h-[47px] max-sm:min-w-[225px]"/>
          
      </div>
    </div>
  );
};

export default ImpelinaBox;
