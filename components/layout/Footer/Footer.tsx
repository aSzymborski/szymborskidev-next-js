import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <div className={`${styles.container}`}>
          <div className={styles.footer_createWrapper}>
            <p className={styles.footer_createWrapper__text}>create with me</p>
          </div>
        </div>
        <div className={styles.footer_contactWrapper}>
          <p className={`${styles.footer_contactWrapper__link} ${styles.effectZoom}`}><a href="email:asz93@icloud.com">asz93@icloud.com</a></p>
          <p className={`${styles.footer_contactWrapper__link} ${styles.effectZoom}`}><a href="tel:+48 504 442 903">+48 504 442 903</a></p>
        </div>
        <div className={styles.footer_rightsWrapper}>
          <div className={`${styles.container}`}>
            <p className={styles.footer_rightsWrapper__text}>All rights reserved 2023 © SzymborskiDev</p>
          </div>
        </div>
      </footer >
    </>
  );
}
