/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    let hrefTarget = e.currentTarget.href;
    e.preventDefault();
    setTimeout(() => {
        const href = hrefTarget;
        const targetId = href.replace(/.*\#/, '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: 'smooth',
        });
    }, 200);
};
  return (
    <>
      <footer className={`${styles.footer}`}>
        <div className={`${styles.container}`}>
          <div className={styles.footer_createWrapper}>
            <p className={styles.footer_createWrapper__text}><Link href="email:asz93@icloud.com" >let's talk</Link></p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={`${styles.footer_rightsWrapper}`}>
            <div className={styles.box}>
            <p className={styles.footer_rightsWrapper__text}>All rights reserved 2023 © SzymborskiDev</p>
            </div>
            <div className={styles.box}>
            <Link href="https://www.linkedin.com/in/adrian-szymborski-116366149" target='_blank'>Linkedin</Link>
              <Link href="https://www.instagram.com/szymborski_a/" target='_blank'>Instagram</Link>
              <Link href="https://github.com/aSzymborski/" target='_blank'>GitHub</Link>
            </div>
            <div className={styles.box}>
            <Link href="https://maps.app.goo.gl/Dndb4UNiTRtBWa7X7" target="_blank">20°51′06″E  21°16′16″E</Link>
            </div>
            <div className={styles.box}>
            <Link href="#home_section" onClick={handleScroll}>back to top</Link>
            </div>
          </div>
        </div>
      </footer >
    </>
  );
}
