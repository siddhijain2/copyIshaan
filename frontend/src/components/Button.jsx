import React from 'react'

const Button = ({ styles, text, link }) => (
  <a href={link}>
    <div
      className={`py-3 px-4 font-medium text-[16px] text-primary bg-Tomato rounded-[12px] outline-none ${styles}`}
    >
      {text}
    </div>
  </a>
)

export default Button
