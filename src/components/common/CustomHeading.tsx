import React from "react";

interface CustomHeadingProps {
  headingText: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ headingText }) => {
  return (
    <h2 className="text-darkBlack uppercase font-bold font-sans-bold text-custom2Xl leading-[61.59px] max-lg:text-3xl max-md:text-2xl">
      {headingText}
    </h2>
  );
};

export default CustomHeading;
