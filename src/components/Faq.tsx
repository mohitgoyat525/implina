"use client";
import { FAQ_LIST } from "@/utils/helper";
import React, { useState } from "react";
import Heading from "../components/common/CustomHeading";
import Description from "../components/common/CustomDiscription";
import FaqArrow from "../../public/assets/images/png/arrow.png";
import Image from "next/image";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? false : index);
  };
  return (
    <div className="bg-offWhite pt-[128px] pb-[146px] max-xl:py-24 max-lg:py-20 max-md:py-16 max-sm:py-10">
      <div className="max-w-[1090px] container mx-auto">
        <Heading myClass="pb-[9px] max-md:text-center" headingText="FAQs" />
        {FAQ_LIST.map((data, index: number) => (
          <div
            key={index}
            className="overflow-hidden min-h-[45px] border-b-[1px] border-solid border-darkGray"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="text-customXl text-start font-semibold leading-[21px] max-lg:text-xl max-md:text-lg max-sm:text-base max-lg:leading-[18px] max-md:leading-[16px] max-sm:leading-[14px] text-blackLight flex justify-between items-center w-full"
            >
              {data.title}
              <Image
                width={30}
                className={`${
                  openIndex === index
                    ? "rotate-[90deg] transition-all duration-300"
                    : "rotate-0 transition-all duration-300"
                } my-[22px] max-md:my-[15px] max-sm:my-[10px] max-md:max-w-[15px]`}
                src={FaqArrow}
                alt="arrow"
              />
            </button>
            <div
              className={`${
                openIndex === index ? "max-h-20 pb-3.5" : "max-h-0"
              } transition-all duration-500 overflow-hidden max-lg:overflow-y-auto`}
            >
              <Description text={data.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
