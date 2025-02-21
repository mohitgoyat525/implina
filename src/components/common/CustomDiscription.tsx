import React from "react";
interface descriptionProps {
  myClass?: string;
  text: string;
}
const Description = ({ myClass, text }: descriptionProps) => {
  return (
    <p
      className={`${myClass} font-light text-customXl max-md:text-lg max-sm:text-base leading-[27px] text-darkBlack`}
    >
      {text}
    </p>
  );
};

export default Description;
