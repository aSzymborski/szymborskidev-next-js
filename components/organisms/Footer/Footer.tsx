import Image from "next/image";
import emailIcon from "@/assets/email.svg";
import styles from "@/components/organisms/Footer/Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.container} ${styles.footer}`}>
        <div className={styles.footer_wrapper}>
          <Image src={emailIcon} alt="icon-email" />
          <a
            className={`${styles.footer_wrapper__email} ${styles.effectZoom}`}
            rel="noreferrer"
            target="_blank"
            href="mailto:asz93@icloud.com"
          >
            asz93@icloud.com
          </a>
        </div>
      </footer>
    </>
  );
}
