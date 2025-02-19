import React from 'react'
import CustomHeading from './common/CustomHeading'
import { KICKBOX_LIST } from '@/utils/helper';

const ImpelinaBox = () => {
    interface CustomHeadingProps {
        headingText: string
    }
  return (
    <div className=" container pt-[134px] pb-[128px] max-xl:py-24 max-lg:py-20 max-md:py-14 max-sm:py-10">
      <CustomHeading headingText="IMPLENIA KICKBOX" />
      <p className="text-[#1D1D1B] text-[21px] font-light leading-7 pt-4">
        Since 2019, our Kickbox Intrapreneurship Program has been inspiring
        employees across all divisions to turn their ideas into impactful
        solutions. From validating ideas (RedBox) to piloting projects (BlueBox)
        and driving implementation (GoldBox), Kickbox provides the tools and
        support to shape the future of Implenia. Become an intrapreneur yourself
        and bring your idea to life!
      </p>
      <div className="flex items-center justify-between mt-5 max-lg:flex-wrap gap-9">
        <div className="flex items-center gap-[71px] max-lg:gap-10 max-md:gap-5 flex-wrap max-md:justify-center">
          {KICKBOX_LIST.map((item, index) => (
            <div key={index} className="flex items-center flex-col">
              <p className="font-normal text-[80px] leading-[100px] text-[#FEBE32] max-lg:text-[60px] max-md:text-5xl max-sm:text-4xl">
                {item.number}
              </p>
              <p className="font-bold text-[21px] leading-[21px]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <button className="text-[#FF132D] max-md:mx-auto border border-solid border-[#FF132D] rounded-full min-w-[268px] h-[58px] flex items-center justify-center font-bold text-[21px] leading-[21px] transition-all ease-linear duration-300 hover:text-white hover:bg-[#FF132D]">
          Submit your idea!
        </button>
      </div>
    </div>
  );
}

export default ImpelinaBox