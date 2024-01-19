import Link from "next/link";
import styles from "@/pages/thanks/thanks.module.scss";
import Head from "next/head";
import Image from "next/image";
import arrowicon from "assets/arrow icon.svg";

export default function Thanks() {
  return (
    <>
      <section className={`${styles.section}`}>
        <div className={styles.container}>
          <div className={`${styles.box}`}>
            <h1 className={styles.section_title}>
              <span className={styles.section_title__bold}>Thank You,</span>{" "}
              message was sent
            </h1>
            <div className={styles.section_text}>
              <Link
                className={`${styles.section_text__href} ${styles.effectZoom}`}
                href="/"
              >
                Back to main page <Image src={arrowicon} alt="arrowicon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
