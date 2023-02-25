/* eslint-disable react/no-unescaped-entities */
import Footer from '@/components/organisms/Footer/Footer'
import styles from '@/styles/Home.module.scss'

export default function Home() {

  return (
    <>
    <main className={`${styles.container}`}>
      <section className={styles.section}>
        <div className={styles.animatedTitle}>
          <div className={styles.textTop}>
            <div>
              <span className={styles.typewriter}>Hello</span>
              <span>I'm Adrian</span>
            </div>
          </div>
          <div className={styles.textBottom}>
            <div>Frontend developer based in Warsaw</div>
          </div>
      </div>
     </section>
    </main>
    <Footer/>
    </>
  )
}
