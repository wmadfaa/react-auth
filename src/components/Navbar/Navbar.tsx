import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Navbar.module.scss";
import Button from "../Button/Button";

export interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={classNames(styles.root, {
        [styles.solid]: !props.transparent,
        [styles.transparent]: props.transparent,
      })}
    >
      <div className={classNames(styles.wrapper, "container")}>
        <div className={styles.main}>
          <h1 className={styles.brand}>React Auth</h1>
          <FontAwesomeIcon
            icon="bars"
            className={styles.toggleMenuButton}
            onClick={() => setNavbarOpen(!navbarOpen)}
          />
        </div>
        <div
          className={classNames(styles.menu, { [styles.isOpen]: navbarOpen })}
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.link} href="#pablo">
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fab", "twitter"]}
                />
                <span className={styles.label}>Tweet</span>
              </a>
            </li>

            <li className={styles.listItem}>
              <a className={styles.link} href="#pablo">
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fab", "github"]}
                />
                <span className={styles.label}>Star</span>
              </a>
            </li>

            <li className={classNames(styles.listItem, "px-2 py-1")}>
              <Button size="sm" status={props.transparent ? "info" : undefined}>
                Download
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
