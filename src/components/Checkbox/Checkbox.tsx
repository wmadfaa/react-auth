import React from "react";
import classNames from "classnames";

import { StatusType, VariantType } from "../sharedPropTypes";

import styles from "./Checkbox.module.scss";

export interface CheckboxProps
  extends Omit<React.HTMLProps<HTMLInputElement>, "ref" | "label"> {
  status?: StatusType;
  variant?: VariantType;
  className?: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { children, label, className, variant, status, ...rest } = props;

    const classes = classNames(
      styles.root,
      variant && styles[`variant-${variant}`],
      status && styles[`status-${status}`],
      className
    );

    return (
      <label className={classes}>
        <input
          ref={ref}
          {...rest}
          type="checkbox"
          className={classNames("form-checkbox", styles.input)}
        />
        <span className={styles.label}>{children || label}</span>
      </label>
    );
  }
);

export default Checkbox;
