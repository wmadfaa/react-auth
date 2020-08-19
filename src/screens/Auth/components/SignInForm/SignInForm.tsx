import React from "react";
import Input from "../../../../components/Input/Input";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import Button from "../../../../components/Button/Button";

import styles from "./SignInForm.module.scss";

const SignInForm: React.FC = () => {
  return (
    <form>
      <Input id="email" label="Email" placeholder="Email" type="email" />
      <Input
        id="password"
        label="Password"
        placeholder="Password"
        type="password"
      />

      <Checkbox id="RememberMeCheck" label="Remember me" />

      <div className={styles.formActionButtons}>
        <Button fullwidth noMargin>
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
