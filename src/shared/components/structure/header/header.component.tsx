import Link from "next/link";
import { Icon } from "@iconify/react";

import { useEffect } from "react";
import { APP } from "../../../constants/app.constant";

import styles from "./header.module.scss";

const Header = () => {
  useEffect(() => {
    const doc = document.documentElement;
    const w = window;
    const siteHeader = document.getElementById(APP.ELEMENT.HEADER_ID);

    let prevScroll = w.scrollY || doc.scrollTop;
    let curScroll;
    let direction = 0;
    let prevDirection = 0;

    document.addEventListener("scroll", () => {
      curScroll = w.scrollY || doc.scrollTop;
      direction = curScroll > prevScroll ? 2 : 1;

      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }

      prevScroll = curScroll;
    });

    const toggleHeader = (direction: number, curScroll: number) => {
      if (direction === 2 && curScroll > 52) {
        siteHeader?.classList.add("hide");
        prevDirection = direction;
      } else if (direction === 1) {
        siteHeader?.classList.remove("hide");
        prevDirection = direction;
      }
    };
  });

  return (
    <>
      <div className={styles.container}>
        <h1>
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
      </div>
    </>
  );
};

export default Header;
