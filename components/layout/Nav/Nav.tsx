/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Menu from "@/components/layout/Nav/Menu/Menu";
import Link from "next/link";
import styles from "./Nav.module.scss";

export default function Nav() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <nav className={styles.nav}>
        <Link
          onClick={() => setOpen(false)}
          className={`${styles.nav_homeBtn} ${styles.effectZoom}`}
          href="/"
        >
          szymborski<span className={styles.nav_homeBtn__span}>dev</span>
        </Link>
        <div>
          <Menu isOpen={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </>
  );
}
