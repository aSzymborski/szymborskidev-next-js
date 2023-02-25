import Link from 'next/link'
import styles from '@/pages/thanks/thanks.module.scss'

export default function Thanks () {
    return (
        <>
         <main className={`${styles.main} ${styles.container}`}>
            <section className={styles.section}>
            <h1 className={styles.section_title}>Thank <span className={styles.section_title__span}>You</span></h1>
            <div className={styles.section_text}>
                <p>Message was sent</p>
                <Link className={`${styles.section_text__href} ${styles.effectZoom}`} href='/'>
                Back to main page
                </Link>
            </div>
            </section>
         </main>
        </>
    )
}