import React from "react";

const Button = ({ styles,text }) => (
  <button type="button" className={`py-3 px-4 font-medium text-[16px] text-primary bg-Tomato rounded-[12px] outline-none ${styles}`}>
    {text}
  </button>
);

export default Button;