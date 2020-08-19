import React from "react";
import classNames from "classnames";

import styles from "./AuthDecorators.module.scss";

export const AuthFormDecorator: React.FC = (props) => {
  return (
    <div className={classNames(styles.wrapper, "container")}>
      <div className={styles.content}>
        <div className={styles.formContainer}>{props.children}</div>
      </div>
    </div>
  );
};
