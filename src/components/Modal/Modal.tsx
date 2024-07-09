import React from "react";
import {
  Modal as AntModal,
  ModalProps as AntModalProps,
  ConfigProvider,
} from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Modal.module.css";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

interface ModalProps extends AntModalProps {
  size?: "sm" | "md" | "lg" | "fullscreen";
  onSubmit?: Function;
}

const sizes: any = {
  xs: 340,
  sm: 460,
  md: 640,
  lg: 900,
  xl: 1100,
  fullscreen: "100%",
};

const ModalStyles: any = {};

export const Modal = (props: ModalProps) => {
  const classes: any = props?.className
    ? `${styles.iki_modal} ${props?.className}`
    : styles.iki_modal;
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {
          //motion: false,
          ...lightTheme,
        },
        components: { Modal: ModalStyles },
      }}
    >
      <AntModal
        {...props}
        width={
          props?.width ? props?.width : props?.size ? sizes[props?.size] : ""
        }
        className={cx(classes, { is_fullscreen: props?.size === "fullscreen" })}
        onOk={() => props?.onSubmit}
      >
        {props?.children}
      </AntModal>
    </ConfigProvider>
  );
};

export default Modal;
