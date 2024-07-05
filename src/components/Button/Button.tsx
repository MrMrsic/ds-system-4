import React from "react";
import { Button as AntButton, ButtonProps } from "antd";
import styles from "./Button.module.css";

const Button = (props: ButtonProps) => {
  const classes: any = props?.className
    ? `${styles.iki_btn} ${props?.className}`
    : styles.iki_btn;
  return (
    <AntButton {...props} className={classes}>
      {props?.children}
    </AntButton>
  );
};

export default Button;
