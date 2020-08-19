import React from "react";

import { AuthFormDecorator } from "../components/AuthDecorators/AuthDecorators";

import AuthFormLayout from "../components/AuthFormLayout/AuthFormLayout";
import SignInForm from "../components/SignInForm/SignInForm";

import styles from "./SignIn.module.scss";

const SignIn: React.FC = () => {
  const handleSignInWithGithub = () => {};
  const handleSignInWithGoogle = () => {};

  return (
    <>
      <div className={styles.root}>
        <AuthFormDecorator>
          <AuthFormLayout
            title="Sign in with"
            secondaryTitle="Or sign in with credentials"
            withSocialMediaButtons
            onGithubActionClick={handleSignInWithGithub}
            onGoogleActionClick={handleSignInWithGoogle}
          >
            <SignInForm />
          </AuthFormLayout>
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
        </AuthFormDecorator>
      </div>
    </>
  );
};

export default SignIn;
