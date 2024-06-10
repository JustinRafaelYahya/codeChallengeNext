import React from "react";

const ButtonPurple = (props) => {
  const { children } = props;
  return (
    <button className=" bg-[#672e91] w-[200px] rounded-md font-semibold px-6 py-3 my-12 text-white hover:scale-105">
      {children}
    </button>
  );
};

export default ButtonPurple;
