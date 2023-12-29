/* eslint-disable react/no-unescaped-entities */
import styles from './aboutmeSection.module.scss'
import me from 'assets/me.webp'
import Image from 'next/image';


export default function AboutmeSection() {

  return (
    <>
      <section id='aboutme_section' className={styles.section}>
        <p className={styles.section_subtitle}>A little</p>
        <h1 className={styles.section_title}>About me</h1>
        <div className={styles.section_textWrapper}>
          <p>Skilled in JavaScript/Next.js/React/Angular/Scss/Bootstrap/Express.js/ and the rest of the tools you need to write better, cleaner code.</p>
          <p>Programming has become my passion for which I devote every free moment. I also interested in old motorization, and more precisely - motorcycles.</p>
        </div>

        <div>
          <Image className={styles.backgroundImage} src={me} alt="me" />
        </div>
      </section>
    </>
  )
}