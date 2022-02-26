import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import styles from "./footer.module.scss";
import { APP } from "../../../constants/app.constant";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <span> Dev</span>
        <Icon icon="ant-design:heart-twotone" className={styles.iconHeart} />
        <span>by</span>&nbsp;
        <span className={styles.by}>
          <Link href={APP.HREF.PERSONAL_WEBSITE}>notBadCode</Link>
        </span>
        .
      </div>
    </footer>
  );
};

export default Footer;
