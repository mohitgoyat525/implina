import React from "react";

interface CustomHeadingProps {
  headingText: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ headingText }) => {
  return <h2 className="text-[#1D1D1B] uppercase font-bold text-[49px] leading-[61.59px] max-lg:text-3xl max-md:text-2xl">{headingText}</h2>;
};

export default CustomHeading;
