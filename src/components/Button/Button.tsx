import React from "react";
import classNames from "classnames";

import { SizesType, StatusType, VariantType } from "../sharedPropTypes";

import styles from "./Button.module.scss";

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  status?: StatusType;
  variant?: VariantType;
  size?: SizesType;
  rounded?: boolean;
  fullwidth?: boolean;
  noMargin?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    variant,
    status,
    size,
    rounded,
    fullwidth,
    noMargin,
    ...rest
  } = props;

  const classes = classNames(
    styles.root,
    variant && styles[`variant-${variant}`],
    status && styles[`status-${status}`],
    size && styles[size],
    { [styles.fullwidth]: fullwidth },
    { [styles.rounded]: rounded },
    { [styles.noMargin]: noMargin },
    className
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
