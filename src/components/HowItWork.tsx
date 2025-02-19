"use client";
import React, { useState } from "react";
import CustomHeading from "./common/CustomHeading";

const HowItWork = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const youtubeHandler = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="bg-offWhite pt-[128px] pb-[144px] max-xl:py-24 max-lg:py-20 max-md:py-16 max-sm:py-10">
      <div className="container">
        <CustomHeading headingText="HOW IT WORKS" />
        <div className="mt-[64px]">
          <div
            onClick={youtubeHandler}
            className="bg-center bg-cover bg-no-repeat bg-youtubeBgImg min-w-[1064px] max-xl:max-w-[1064px] max-xl:min-w-min max-lg:h-[500px] max-md:h-[450px] max-sm:h-[320px] h-[580px] rounded-3xl relative"
          >
            {isVideoPlaying ? (
              <iframe
                src="https://www.youtube.com/embed/dLKYFu_sMTM?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-3xl"
              />
            ) : (
              <div className="w-full max-w-[372px] bg-offYellow max-md:w-[320px] max-md:top-[15px] max-md:left-[15px]  py-[9px] px-[3px] h-[144px] absolute top-[24px] left-[29px]">
                <p className="text-center text-customXl leading-[21px] font-bold font-sans-bold max-w-[375px] mx-auto text-black">
                  VIDEO CAN BE EXCHANGED FOR CAMPAIGNS.
                </p>
                <p className="text-center text-customXl leading-[21px] font-bold font-sans-bold text-black pt-7">
                  -Titel: Name of Campaign
                </p>
                <p className="text-center text-customXl leading-[21px] font-bold font-sans-bold text-black">
                  -Button: Join the campaign!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
