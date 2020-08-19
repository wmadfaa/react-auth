import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../../../components/Button/Button";

import styles from "./AuthFormLayout.module.scss";
import classNames from "classnames";

export interface SignInFormProps {
  title: React.ReactNode;
  secondaryTitle?: React.ReactNode;
  withSocialMediaButtons?: boolean;
  onGithubActionClick?(): void;
  onGoogleActionClick?(): void;
  children: React.ReactNode;
}

const AuthFormLayout: React.FC<SignInFormProps> = (props) => {
  return (
    <div className={styles.root}>
      <section className={styles.socialMediaSection}>
        <div className={styles.socialMediaHeader}>
          <h6
            className={classNames(styles.socialMediaTitle, {
              [styles.socialMediaLargeTitle]: !props.withSocialMediaButtons,
            })}
          >
            {props.title}
          </h6>
        </div>
        {props.withSocialMediaButtons && (
          <>
            <div className={styles.socialMediaButtons}>
              <Button size="sm" onClick={props.onGithubActionClick}>
                <FontAwesomeIcon icon={["fab", "github"]} /> Github
              </Button>
              <Button size="sm" onClick={props.onGoogleActionClick}>
                <FontAwesomeIcon icon={["fab", "google"]} /> Google
              </Button>
            </div>
            <hr className={styles.hr} />
          </>
        )}
      </section>
      <section className={styles.formSection}>
        {props.withSocialMediaButtons && props.secondaryTitle && (
          <div className={styles.formHeader}>
            <small>{props.secondaryTitle}</small>
          </div>
        )}
        {props.children}
      </section>
    </div>
  );
};

export default AuthFormLayout;
