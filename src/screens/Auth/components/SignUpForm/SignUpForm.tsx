import React from "react";
import Input from "../../../../components/Input/Input";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import Button from "../../../../components/Button/Button";

import styles from "./SignUpForm.module.scss";

const SignUpForm: React.FC = () => {
  return (
    <form>
      <Input id="email" label="Email" placeholder="Email" type="email" />
      <Input
        id="user-name"
        label="User Name"
        placeholder="User Name"
        type="text"
      />
      <Input
        id="password"
        label="Password"
        placeholder="Password"
        type="password"
      />

      <Checkbox id="RememberMeCheck" label="i accept the terms of use." />

      <div className={styles.formActionButtons}>
        <Button fullwidth noMargin>
          Create An Account
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
