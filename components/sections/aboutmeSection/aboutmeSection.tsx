/* eslint-disable react/no-unescaped-entities */
import { useAppContext } from "@/context/appContext";
import styles from "./aboutmeSection.module.scss";
import me from "assets/me.webp";
import Image from "next/image";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { useEffect } from "react";

export default function AboutmeSection() {
  const { setAppCursorText, setAppTextColor, setOuterScale } = useAppContext();

  const handleMouseEnter = () => {
    setAppCursorText("");
    setAppTextColor("");
    setOuterScale(5);
  };

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
        id="aboutme_section"
        className={`${styles.section}`}
        onMouseEnter={handleMouseEnter}
      >
        <div className={styles.wrapper}>
          <h1 className={styles.section_title}>A little about me</h1>
          <div className={styles.section_textWrapper}>
            <p>
              Skilled in
              JavaScript/Next.js/React/Angular/Scss/Bootstrap/Express.js/ and
              the rest of the tools you need to write better, cleaner code.
            </p>
            <p>
              Programming has become my passion for which I devote every free
              moment. I also interested in old motorization, and more precisely
              - motorcycles.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image className={styles.backgroundImage} src={me} alt="me" />
          </div>
        </div>
        <div className={styles.footerNav}>
          <Link
            className={`${styles.effectZoom} ${styles.whiteHrefBtn} `}
            href="#works_section"
            onClick={handleScroll}
          >
            Explore my work <GoChevronDown size={30} />
          </Link>
        </div>
      </section>
    </>
  );
}
