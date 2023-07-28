

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
              src="images/qr-code.png"
              alt="demo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DemoVideoVideoplayer03.defaultProps = {};

export default DemoVideoVideoplayer03;
 