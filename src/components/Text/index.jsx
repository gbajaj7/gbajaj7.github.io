import React from "react";

const sizeClasses = {
  txtPoppinsLightItalic1946: "font-light font-poppins italic",
  txtInterMedium1577: "font-inter font-medium",
  txtPoppinsRegular1229: "font-normal font-poppins",
  txtInterRegular1182: "font-inter font-normal",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtPoppinsRegular1639: "font-normal font-poppins",
  txtInterRegular138: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
