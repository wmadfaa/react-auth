import React from "react";
import Button from "../../../../components/Button/Button";

import styles from "./SignInForm.module.scss";

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
            <div className="relative w-full mb-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email
              </label>
              <input
                type="email"
                className="form-input p-3 text-sm shadow w-full border-none focus:outline-none focus:shadow-outline"
                placeholder="Email"
                style={{ transition: "all .15s ease" }}
              />
            </div>

            <div className="relative w-full mb-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                type="password"
                className="form-input p-3 text-sm shadow w-full border-none focus:outline-none focus:shadow-outline"
                placeholder="Password"
                style={{ transition: "all .15s ease" }}
              />
            </div>

            <label className="inline-flex items-center cursor-pointer">
              <input
                id="customCheckLogin"
                type="checkbox"
                className="form-checkbox text-gray-800 w-5 h-5"
                style={{ transition: "all .15s ease" }}
              />
              <span className="ml-2 text-sm font-semibold text-gray-700">
                Remember me
              </span>
            </label>

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
