/* eslint-disable react/no-unescaped-entities */
import Footer from '@/components/organisms/Footer/Footer'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import keyboard from 'assets/keyboard_1.svg'
import Head from 'next/head'

export default function Home() {

  return (
    <>
    <Head>
      <title>SzymborskiDev</title>
      <meta property="og:title" content="SzymborskiDev" key="title" />
    </Head>
    <main className={`${styles.container}`}>
      <section className={styles.section}>
        <div className={styles.titleWrapper}>
        <p>Hello</p>
        <p>I'm Adrian</p>
        <p>Frontend developer based in  Warsaw</p>
        </div>
       <Image className={styles.backgroundImage} src={keyboard} alt="keyboard"/>
     </section>
    </main>
    <Footer/>
    </>
  )
}
