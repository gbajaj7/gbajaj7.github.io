import React from "react";

import { Button, Input, Text } from "components";

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
                  className="mt-[17px] text-[16.39px] text-gray-900 w-full"
                  size="txtPoppinsRegular1639"
                >
                  {props?.descriptiontext}
                </Text>
                <Text
                  className="mt-[17px] text-[16.39px] text-gray-900 w-full"
                  size="txtPoppinsRegular1639"
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
            <div className="flex flex-row items-center justify-evenly w-full">
                <div className="flex sm:flex-1 flex-col items-center justify-start w-[62%] sm:w-full">
                  <Input
                    name="input"
                    placeholder="Email Address"
                    className="font-poppins md:h-auto p-0 placeholder:text-gray-600 sm:h-auto sm:pr-5 text-base text-gray-600 text-left tracking-[0.20px] w-full"
                    wrapClassName="bg-white-A700 pl-5 pr-[35px] py-2 rounded-[16px] w-full"
                    onChange={props?.handleChange}
                    errors={props?.errors}
                    value={props?.input}
                  ></Input>
                </div>
                <div className="flex flex-col items-start justify-start p-2.5 w-auto">
                  <Button
                    className="common-pointer bg-orange-200 cursor-pointer font-bold font-poppins h-[35px] py-1.5 rounded-[17px] text-base text-black-900_01 text-center tracking-[0.20px] w-[109px]"
                    onClick={props?.onClick}
                  >
                    {props?.signupbutton}
                  </Button>
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
            <div className="flex flex-col items-center justify-start">
              <Text
                className="mt-[17px] text-[16.39px] text-gray-900 w-full"
                size="txtPoppinsRegular1639"
              >
                {props?.whatsnext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DemoVideoInstructions.defaultProps = {
  mottotext: "Introducing Utoopia: A new way to seek optimal compatible relationships.",
  descriptiontext: (
    <ol style={{ listStyleType: 'decimal', marginTop: 10}}>
    <li> Compatibility is colorful. It is more than just having same interest, or same liking. </li>
    <li> Our compatibility calculations are inspired from rich ancient eastern philosophies, combined with mathematical models. </li>
    <li> Designed by a relationship enthusiast with a multi-cultural experience and a passionate female engineer who is ready to listen to customers and solve their problems.</li>
  </ol>),
  descriptiononetext:   (
    <>
      We are solving the compatibility problem from root and providing a high-quality compatibility score to build nurturing relationships. 
      We have categorized compatibility across various meaningful dimensions like romantic, emotional, intellectual, and may others. 
      We value positive customer experience and therefore creating a holistic productive product to solve our customers problems. 
      We are here to receive your feedback.
      <br />
    </>
  ),  
  descriptiontwotext: (
    <>
      Watch the product video and sign up with the email if interested in onboarding pre-launch. 
      <br />
    </>
  ),
  signupbutton: "Sign up",
  pricetext:
    "Sign up NOW with your email to get 3-month FREE subscription which would otherwise be $60 for 3 months at the time of launch.",
  whatsnext:   (
      <>
        <b>What’s next</b>
        <br></br>
        We are officially launching on September 1, 2023. If you have any feedback, email gbajaj7@gmail.com
        <br />
      </>
  ),  
};

export default DemoVideoInstructions;
