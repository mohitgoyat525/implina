import React from "react";

interface CustomHeadingProps {
  headingText: string;
  myClass: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({
  headingText,
  myClass,
}) => {
  return (
    <h2
      className={`text-darkBlack uppercase font-bold ${myClass} font-sans-bold tracking-[0.66px] text-custom2Xl leading-[61.59px] max-lg:text-3xl max-md:text-2xl`}
    >
      {headingText}
    </h2>
  );
};

export default CustomHeading;
