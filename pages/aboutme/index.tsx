import axios from 'axios';
import styles from '@/pages/aboutme/aboutme.module.scss'
import me from 'assets/me.webp'
import Image from 'next/image';
import Head from 'next/head'

interface AboutItem {
  header:string
  id: string
  passion:string
  skills:string
}

type Props = {
  aboutMeData : AboutItem[]
}

export default function AboutMe({  aboutMeData }: Props) {
  return (
    <>
    <Head>
      <title>About Me - SzymborskiDev</title>
      <meta property="og:title" content="About Me SzymborskiDev" key="title" />
    </Head>
    <main className={`${styles.main} ${styles.container}`}>
      <section className={styles.section}>
        <h1 className={styles.section_title}>About <span className={styles.section_title__span}>Me</span></h1>
        {aboutMeData ? aboutMeData.map(item => (
          <div key={item.id} className={styles.section_textWrapper}>
            <p>{item.header}</p>
            <p>{item.passion}</p>
            <p>{item.skills}</p>
          </div>
        )):null}
        <Image className={styles.backgroundImage} src={me} alt="me"/>
     </section>
    </main>
    </>
  )
}

export const getServerSideProps = async ()=> {
  try {
      const { data } = await axios.post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
          allAboutmeHeaders {
            id
            header
            skills
            passion
          }
        }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.DATO_CMS_KEY}`,
          },
        }
      );
      if(!data) {
        return {
          redirect:{
            destination:'/',
            permanent: false,
          }
        }
      }
      const aboutMeData = data.data.allAboutmeHeaders
      return {
        props: { aboutMeData }
      }
    } catch (err) {
      console.error(err);
    }
}