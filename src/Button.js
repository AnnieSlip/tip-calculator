import React from "react";
import "./button.css";

const Button = (props) => {
  const { num, className } = props;
  return (
    <button className={className} onClick={props.onClick}>
      {num} %
    </button>
  );
};

export default Button;
