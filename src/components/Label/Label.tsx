import React from "react";
import classNames from "classnames";

import { StatusType, VariantType } from "../sharedPropTypes";

import styles from "./Label.module.scss";

export interface LabelProps extends React.HTMLProps<HTMLSpanElement> {
  status?: StatusType;
  variant?: VariantType;
  children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = (props) => {
  const { children, className, variant, status, ...rest } = props;

  const classes = classNames(
    styles.root,
    variant && styles[`variant-${variant}`],
    status && styles[`status-${status}`],
    className
  );

  return (
    <span {...rest} className={classes}>
      {children}
    </span>
  );
};

export default Label;
