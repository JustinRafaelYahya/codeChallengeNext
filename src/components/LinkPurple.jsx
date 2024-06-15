import React from "react";

const LinkPurple = (props) => {
  const { children, className } = props;
  return (
    <button
      className={`${className} text-[#672e91] font-semibold hover:border-b-2 border-[#672e91]`}
    >
      {children}
    </button>
  );
};

export default LinkPurple;
