/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import styles from "./homeSection.module.scss";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { useAppContext } from "@/context/appContext";

export default function HomeSection() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { setAppCursorText, setAppTextColor, setOuterScale } = useAppContext();

  const handleMouseEnter = () => {
    setAppCursorText("");
    setAppTextColor("");
    setOuterScale(5);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatDate(date: any) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return ` ${hours}:${minutes}:${seconds}`;
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    let hrefTarget = e.currentTarget.href;
    e.preventDefault();
    setTimeout(() => {
      const href = hrefTarget;
      const targetId = href.replace(/.*\#/, "");
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <>
      <section
        id="home_section"
        className={`${styles.homeSection} ${styles.container}`}
        onMouseEnter={handleMouseEnter}
      >
        <div className={styles.wrapper}>
          <div className={styles.leftBox}></div>
          <div className={styles.rightBox}>
            <h1 className={styles.title}>
              Creative and independent Front-End Developer based in Warsaw{" "}
            </h1>
            <div className={styles.timeWrapper}>
              <p>{formatDate(currentDate)}</p>
            </div>
            <p className={styles.text}>
              with three years of experience building stable apps and websites
              in fast-paced. I am self-taught.
            </p>
            <Link
              className={`${styles.effectZoom} ${styles.whiteHrefBtn} `}
              href="#aboutme_section"
              onClick={handleScroll}
            >
              More about me <GoChevronDown size={30} />
            </Link>
          </div>
        </div>
        <div className={styles.footerNav}>
          <Link
            href="https://www.linkedin.com/in/adrian-szymborski-116366149"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link href="https://www.instagram.com/szymborski_a/" target="_blank">
            Instagram
          </Link>
          <Link href="https://github.com/aSzymborski/" target="_blank">
            GitHub
          </Link>
          <Link href="mailto:asz93@icloud.com">let's talk</Link>
        </div>
      </section>
    </>
  );
}
