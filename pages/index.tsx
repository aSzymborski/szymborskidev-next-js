/* eslint-disable react/no-unescaped-entities */
import HomeSection from '@/components/sections/homeSection/homeSection'
import Head from 'next/head'
import styles from '@/styles/general.module.scss'
import AboutmeSection from '../components/sections/aboutmeSection/aboutmeSection'
import ContactSection from '../components/sections/contactSection/contactSection'
import WorkSection from './works'

export default function Home() {



  return (
    <>
      <Head>
        <title>SzymborskiDev | Frontend Developer</title>
        <meta property="og:title" content="SzymborskiDev" key="FrontendDeveloper" />
      </Head>
      <main>
        <HomeSection />
        <AboutmeSection />
        <WorkSection />
        <ContactSection />
      </main>
    </>
  )
}
