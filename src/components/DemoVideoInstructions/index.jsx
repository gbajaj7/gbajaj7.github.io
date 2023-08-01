import React from "react";

import { Button, Input, Text } from "components";
import { Img } from "components";

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
                    placeholder="Email"
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
  mottotext: "🌟 Introducing Utoopia: A new and smart way to 'Date' based on compatibility🌟",
  descriptiontext: (
    <><span><ul style={{ listStyleType: 'disc', marginTop: 10 }}>
      <li>Do you want to date smartly?</li>
      <li>Do you care about deep connections and high quality compatibility?</li>
      <li>Do you feel your dating app feedbacks is not getting heard?</li>
      <li>Do you admire various relationship philosophies in the world?</li>
      <li>Do you like thoughful logical algorithm over brute force attemps?</li>
      <li>Do you support BIPOC, Women entrepreneur, Women who code?</li>
      <br />
      </ul>
      <b>That's what sets us apart</b>
    </span><ol style={{ listStyleType: 'decimal', marginTop: 10 }}>
        <li> 🌈 <b><i>Solving Compatibility from the Root because Compatibility is colorful:</i></b>  <br />
          Our unique calculation delve into the essence of what makes relationships thrive. 
          Utoopia celebrates diversity and recognizes that every individual has their own unique preferences and needs. 
          </li><br />
        <li> 🛠 <b><i>Crafted with Care: </i></b>  <br />
          Designed by a relationship enthusiast with a multi-cultural experience and a passionate female engineer who is ready to listen to customers and solve their problems. 
          </li><br />
        <li> 🏆 <b><i>High-Quality Compatibility Score: </i></b>  <br />
          By blending ancient wisdom with modern science, we've created a comprehensive system that considers multiple dimensions, 
          including romantic, emotional, intellectual, and many others. 
          <Img
                className="h-[397px] sm:h-auto object-cover w-[396px] md:w-full"
                src="images/compatibilityScore.png"
                alt="demo"
            />
          </li><br />
        <li> 💖 <b><i>A Holistic Approach: </i></b>  <br />
          We are at the core of positive productive customer experience and thus dedicated to building holistic and productive product that addresses all your relationship needs every step of the way. 
         </li>
      </ol></>),
  descriptiononetext:   (
    <>
      📢 Join the Utoopia Community: Utoopia is coming soon, and we can't wait to embark on this journey with you. 
      Let's redefine relationships together! Watch our product video to get a glimpse of what Utoopia has to offer and sign up for pre-launch. 
      <br />
    </>
  ),  
  signupbutton: "Sign up",
  whatsnext: (
    <>
      If you're eager to be part of our pre-launch journey and discover love in a whole new way, sign up with your email to receive updates, early access, subscription discounts and many more surprises. 
      We are here to revolutionize the way you seek and experience relationships. Let's embark on this exciting adventure together! 🚀 
      <br />
    </>
  ),
};

export default DemoVideoInstructions;
