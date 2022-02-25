import Link from "next/link";
import { Grid } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import styles from "./header.module.css";

import Config from "../config/config.component";

const Header = () => {
  return (
    <>
      <div>
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

        <Config></Config>
      </div>
    </>
  );
};

export default Header;
