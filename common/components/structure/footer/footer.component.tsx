import React from "react";
import { Icon } from "@iconify/react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Develop with{" "}
        <Icon icon="ant-design:heart-twotone" className={styles.iconHeart} /> by
        notBadCode.
      </span>
    </footer>
  );
};

export default Footer;
