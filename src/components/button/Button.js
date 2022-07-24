import React from "react";
import style from "../../styles/button/button.module.css";

const Button = ({ text }) => {
  return (
    <>
      <button className={style["button"]}>{text}</button>
    </>
  );
};

export default Button;
