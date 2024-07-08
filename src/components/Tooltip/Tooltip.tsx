import React from "react";
import {
  Tooltip as AntTooltip,
  TooltipProps as AntTooltipProps,
  ConfigProvider,
} from "antd";
import lightTheme from "../../styles/lightAntdTheme";
import styles from "./Tooltip.module.css";

const TooltipStyles: any = {
  colorBgSpotlight: "#414D5A",
  borderRadius: 4,
  paddingSM: 16,
  paddingXS: 16,
  fontSize: 13,
  lineHeight: "18px",
};

export const Tooltip = (props: AntTooltipProps) => {
  const classes: any = props?.className
    ? `${styles.iki_tooltip} ${props?.className}`
    : styles.iki_tooltip;
  return (
    <ConfigProvider
      wave={{ disabled: true }}
      theme={{
        token: {
          //motion: false,
          ...lightTheme,
        },
        components: { Tooltip: TooltipStyles },
      }}
    >
      <AntTooltip {...props} className={classes}>
        {props?.children}
      </AntTooltip>
    </ConfigProvider>
  );
};

export default Tooltip;
