import React from "react";

import { ToastContainer, toast } from "react-toastify";

import { userSignUpPut } from "service/api";
import * as yup from "yup";

import { Img, Text } from "components";
import DemoVideoInstructions from "components/DemoVideoInstructions";
import DemoVideoVideoplayer03 from "components/DemoVideoVideoplayer03";
import useForm from "hooks/useForm";

import "react-toastify/dist/ReactToastify.css";

const payloadData = { payload: { Item: { emailAddress: "" } } };

const DemoVideoPage = () => {
  const [userSignUp, setUserSignUp] = React.useState();
  const formValidationSchema = yup
  .object()
  .shape({
    payload: yup
      .object()
      .shape({
        Item: yup
          .object()
          .shape({
            emailAddress: yup
              .string()
              .matches(
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                "EmailAddress is not in correct format",
              ),
          }),
      }),
  });

  /*let errorin;
   formValidationSchema
    .validate(payloadData)
    .then(
      console.log(payloadData) // returns car object
    )
    .catch(function(err) {
      console.log(err);
      errorin = err;
    }); */

  const form = useForm(
    { payload: { Item: { emailAddress: "" } } },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    },
  );
 
  console.log(form.values);
  console.log(form.errors);
  
  function signup(data) {
    const req = {
      data: { 
            "payload": {
              "TableName": "userSignup",
              "Item": 
                {"emailAddress" : data?.payload.Item.emailAddress  } 
            }
          }
    };

    userSignUpPut(req)
      .then((res) => {
        setUserSignUp(res?.data);

        localStorage.setItem("email", JSON.stringify(res?.data?.emailAddress));

        toast.success("Success, Registered your email!");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err + data + "Please enter the correct email address.");
      });
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto md:px-10 sm:px-5 px-[40.01px] w-auto sm:w-full md:w-full">
        <DemoVideoInstructions 
          className="bg-gray-50 flex flex-col gap-2.5 justify-start max-w-[1359px] mx-auto md:px-5 w-full" 
          handleChange={(e) =>
            form.handleChange("payload.Item.emailAddress", e)
          }
          //errors={form.errors?.payload.Item.emailAddress}
          //errors={form.errors}
          errors={form.errors?.payload?.Item?.emailAddress}
          input={form?.values?.payload?.Item?.emailAddress}
          
          onClick={() => form.handleSubmit(signup)}
        />
        <video src={require("assets/video/Utoopia_Demo1.mov")} controls="controls" playsinline webkit-playsinline>
        </video>
        {/* <DemoVideoVideoplayer03 className="flex flex-col gap-[6.64px] items-start justify-start rounded-[7px] w-[413px] sm:w-full" /> */}
      </div>
      <ToastContainer />
    </>
  );
};

export default DemoVideoPage;
