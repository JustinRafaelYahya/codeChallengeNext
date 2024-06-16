import React from "react";

const ButtonPurple = (props) => {
  const { children, className } = props;
  return (
    <button
      className={`${className} bg-[#672e91] rounded-md font-semibold px-6 py-3 my-12 text-white hover:scale-105 justify-center`}
    >
      {children}
    </button>
  );
};

export default ButtonPurple;
