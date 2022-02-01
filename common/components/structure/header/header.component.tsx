import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <h1 className={styles.title}>
      Hello! I'm{" "}
      <Link href="/">
        <a>
          Dev{" "}
          <Icon
            icon="clarity:internet-of-things-line"
            inline={true}
            className={styles.iconThings}
          />{" "}
          things!
        </a>
      </Link>
    </h1>
  );
};

export default Header;
