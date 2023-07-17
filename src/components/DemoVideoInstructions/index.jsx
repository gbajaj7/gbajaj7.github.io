import React from "react";

import { Text } from "components";

const DemoVideoInstructions = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-50_01 h-[23px] md:ml-[0] ml-[306px] mr-[458px] w-[44%]"></div>
        <div className="flex flex-col gap-2 items-center justify-start mb-[13px] md:ml-[0] ml-[311px] mr-[419px] w-auto md:w-full">
          <div className="flex flex-col items-start justify-start py-[37.89px] w-auto md:w-full">
            <div className="flex flex-col gap-[38px] items-center justify-start w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-full"
                size="txtPoppinsMedium30"
              >
                {props?.mottotext}
              </Text>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="italic text-[19.46px] text-gray-900 w-full"
                  size="txtPoppinsLightItalic1946"
                >
                  {props?.descriptiontext}
                </Text>
                <Text
                  className="mt-10 text-[12.29px] text-black-900 w-full"
                  size="txtPoppinsRegular1229"
                >
                  {props?.descriptiononetext}
                </Text>
                <Text
                  className="mt-[17px] text-[16.39px] text-gray-900 w-full"
                  size="txtPoppinsRegular1639"
                >
                  {props?.descriptiontwotext}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[5.91px] items-start justify-start w-auto">
            <div className="md:h-[19px] h-[39px] relative w-[99%]">
              <div className="absolute h-[19px] right-[0] top-[0] w-[35%]">
                <div className="absolute bg-white-A700 h-[19px] inset-y-[0] my-auto right-[5%] w-[82%]"></div>
                <Text
                  className="absolute bg-orange-100 h-full inset-[0] justify-center m-auto pt-1 sm:px-5 px-[31px] rounded-md text-[11.82px] text-black-900_01 text-center w-max"
                  size="txtInterRegular1182"
                >
                  {props?.signuptext}
                </Text>
              </div>
              <div className="absolute md:h-[19px] h-[39px] inset-y-[0] left-[0] my-auto pb-[19px] pr-[19px] w-[67%]">
                <div className="absolute bg-gray-50_02 h-[19px] left-[0] rounded-md top-[0] w-[91%]"></div>
                <Text
                  className="absolute left-[2%] text-[13.8px] text-gray-500 top-[8%]"
                  size="txtInterRegular138"
                >
                  {props?.emailaddresstext}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-gray-300_cc flex flex-col items-center justify-start rounded-[7px] w-full">
                <Text
                  className="leading-[23.00px] mb-[18px] mt-1.5 text-[15.77px] text-indigo-500 w-[98%] sm:w-full"
                  size="txtInterMedium1577"
                >
                  {props?.pricetext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DemoVideoInstructions.defaultProps = {
  mottotext: "Utoopia: Where you discover the most compatible connections.",
  descriptiontext:
    "Our motto is to use science & art that is guided by ancient eastern and western philosophies, combining psychological and mathematical models.",
  descriptiononetext: (
    <>
      Designed by a relationship enthusiasts and a customer obsessed engineer
      who is ready to listen to customers and solve their problems.
      <br />
    </>
  ),
  descriptiontwotext: (
    <>
      We solve the compatibility problem from root and provide compatibility
      score across various dimensions like romantic, emotional, intellectual, or
      physical.
      <br />
    </>
  ),
  signuptext: "SIGN UP",
  emailaddresstext: "Email Address",
  pricetext:
    "Sign up for an alpha launch with 3 month FREE subscription saving you $60.",
};

export default DemoVideoInstructions;
