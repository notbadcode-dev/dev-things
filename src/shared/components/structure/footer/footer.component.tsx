import React from "react";
import { Icon } from "@iconify/react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span> Develop with </span>
        <Icon
          icon="ant-design:heart-twotone"
          className={styles.iconHeart}
        />{" "}
        <span>by</span>
        <span className={styles.by}> notBadCode</span>.
      </div>
    </footer>
  );
};

export default Footer;
