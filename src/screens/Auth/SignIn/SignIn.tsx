import React from "react";
import classNames from "classnames";

import styles from "./SignIn.module.scss";

const SignIn: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={classNames(styles.wrapper, "container")}>
        <div className={styles.content}>{}</div>
      </div>
    </div>
  );
};

export default SignIn;
