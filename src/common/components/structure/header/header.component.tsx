import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <h1 className={styles.title}>
      <Link href="/">
        <a>
          Dev{" "}
          <Icon
            icon="clarity:internet-of-things-line"
            inline={true}
            className={styles.iconThings}
          />{" "}
          things! <span>(Beta)</span>
        </a>
      </Link>
    </h1>
  );
};

export default Header;