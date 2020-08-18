import React from "react";
import Button from "../../../../components/Button/Button";

import styles from "./SignInForm.module.scss";
import Input from "../../../../components/Input/Input";
import Checkbox from "../../../../components/Checkbox/Checkbox";

export interface SignInFormProps {}

const SignInForm: React.FC<SignInFormProps> = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <section className={styles.socialMediaSection}>
          <div className={styles.socialMediaHeader}>
            <h6 className={styles.socialMediaTitle}>Sign in with</h6>
          </div>
          <div className={styles.socialMediaButtons}>
            <Button size="sm">Github</Button>
            <Button size="sm">Google</Button>
          </div>
          <hr className={styles.hr} />
        </section>
        <section className={styles.formSection}>
          <div className={styles.formHeader}>
            <small>Or sign in with credentials</small>
          </div>
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
        </section>
      </div>
      <section className={styles.otherActions}>
        <div className={styles.otherAction}>
          <a href="#pablo" className={styles.actionLink}>
            <small>Forgot password?</small>
          </a>
        </div>
        <div className={styles.otherAction}>
          <a href="#pablo" className={styles.actionLink}>
            <small>Create new account</small>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SignInForm;
