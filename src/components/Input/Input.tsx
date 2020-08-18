import React from "react";
import classNames from "classnames";
import { StatusType, VariantType } from "../sharedPropTypes";

import styles from "./Input.module.scss";

export interface InputProps
  extends Omit<React.HTMLProps<HTMLInputElement>, "ref"> {
  id: string;
  label: string;
  hint?: string;
  status?: StatusType;
  variant?: VariantType;
  rounded?: boolean;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    variant,
    status,
    rounded,
    className,
    label,
    id,
    hint,
    ...rest
  } = props;

  const classes = classNames(
    styles.root,
    variant && styles[`variant-${variant}`],
    status && styles[`status-${status}`],
    { [styles.rounded]: rounded },
    className
  );

  return (
    <section className={classes}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        {...rest}
        className={classNames("form-input", styles.input)}
      />
      {hint && <p className={styles.hint}>{hint}</p>}
    </section>
  );
});

export default Input;
