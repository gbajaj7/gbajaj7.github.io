import React from "react";

import { Img, Text } from "components";
import DemoVideoInstructions from "components/DemoVideoInstructions";
import DemoVideoVideoplayer03 from "components/DemoVideoVideoplayer03";


const DemoVideoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto md:px-10 sm:px-5 px-[40.01px] w-auto sm:w-full md:w-full">
        <DemoVideoInstructions className="bg-gray-50 flex flex-col gap-2.5 justify-start max-w-[1359px] mx-auto md:px-5 w-full" />
        <video src={require("assets/video/Utoopia_Demo1.mov")} controls="controls">
        </video>
        {/* <DemoVideoVideoplayer03 className="flex flex-col gap-[6.64px] items-start justify-start rounded-[7px] w-[413px] sm:w-full" /> */}
      </div>
    </>
  );
};

export default DemoVideoPage;
