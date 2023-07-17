

import React from "react";

import { Img } from "components";

const DemoVideoVideoplayer03 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[442px] md:h-auto items-center justify-start w-auto">
          <div className="flex flex-col h-[404px] md:h-auto items-start justify-start p-[6.64px] w-[406px] sm:w-full">
            <Img
              className="h-[397px] sm:h-auto object-cover w-[396px] md:w-full"
              src="images/img_demo_614x612.png"
              alt="demo"
            />
          </div>
          <div className="bg-black-900 flex flex-col h-[21px] md:h-auto items-center justify-start w-auto sm:w-full">
            <div className="flex flex-row gap-[2.98px] h-[21px] md:h-auto items-center justify-start px-[15.91px] w-auto sm:w-full">
              <div className="flex flex-col h-[21px] items-center justify-start w-[21px]">
                <Img
                  className="h-[21px] w-[21px]"
                  src="images/img_pause.svg"
                  alt="pause"
                />
              </div>
              <div className="flex flex-row gap-[2.66px] h-[21px] md:h-auto items-center justify-center w-[315px]">
                <Img
                  className="h-[15px] w-[73px]"
                  src="images/img_navpoint.svg"
                  alt="menu"
                />
                <Img
                  className="h-[15px] w-[162px]"
                  src="images/img_navpoint_light_blue_400.svg"
                  alt="navpoint"
                />
                <Img
                  className="h-[15px] w-[73px]"
                  src="images/img_navpoint_green_200.svg"
                  alt="menu_One"
                />
              </div>
              <div className="flex flex-col h-[21px] items-center justify-start w-[21px]">
                <Img
                  className="h-[21px] w-[21px]"
                  src="images/img_volume.svg"
                  alt="volume"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DemoVideoVideoplayer03.defaultProps = {};

export default DemoVideoVideoplayer03;
 