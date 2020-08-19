import React from "react";

import { AuthFormDecorator } from "../components/AuthDecorators/AuthDecorators";

import AuthFormLayout from "../components/AuthFormLayout/AuthFormLayout";
import SignUpForm from "../components/SignUpForm/SignUpForm";

import styles from "./SignUp.module.scss";

const SignUp: React.FC = () => {
  const handleSignInWithGithub = () => {};
  const handleSignInWithGoogle = () => {};

  return (
    <div className={styles.root}>
      <AuthFormDecorator>
        <AuthFormLayout
          title="Sign up with"
          secondaryTitle="Or sign up with credentials"
          withSocialMediaButtons
          onGithubActionClick={handleSignInWithGithub}
          onGoogleActionClick={handleSignInWithGoogle}
        >
          <SignUpForm />
        </AuthFormLayout>
        <section className={styles.otherActions}>
          <div className={styles.otherAction}>
            <a href="#pablo" className={styles.actionLink}>
              <small>Forgot password?</small>
            </a>
          </div>
          <div className={styles.otherAction}>
            <a href="#pablo" className={styles.actionLink}>
              <small>already have an account?</small>
            </a>
          </div>
        </section>
      </AuthFormDecorator>
    </div>
  );
};

export default SignUp;
