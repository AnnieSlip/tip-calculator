import React from "react";
import "./button.css";

const Button = (props) => {
  const { num, className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      {num} %
    </button>
  );
};

export default Button;
