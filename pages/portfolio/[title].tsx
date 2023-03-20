import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from '@/pages/portfolio/PortfolioProject.module.scss'
import Head from 'next/head'

interface Project   {
  id:string
  title:string
  photo:any
  link:string
  year:string
  aboutproject:string
  technologyStack:string
  projectgallery:string []
}

export default function PortfolioProject ( project:Project ) {
    const { back } = useRouter()
    return (
        <>
          <Head>
           <title>{project.title} SzymborskiDev</title>
           <meta property="og:title" content="Portfolio SzymborskiDev" key="title" />
         </Head>
         <main className={`${styles.main} ${styles.container}`}>
          <section className={styles.section}>
            <h1 className={styles.section_title}>{project.title}</h1>
            <div className={styles.contentWrapper}>
              <ul className={styles.contentWrapper_list}>
                <li className={styles.contentWrapper_list__item}>
                  <p>Technology Stack</p>
                  <p>{project.technologyStack}</p>
                </li>
                <li className={styles.contentWrapper_list__item}>
                  <p>Year</p>
                  <p>{project.year}</p>
                </li>
                <li className={styles.contentWrapper_list__item}>
                  <p>Link</p>
                  <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
                </li>
              </ul>
              <div className={styles.contentWrapper_aboutWrapper}>
                <p>{project.aboutproject}</p>
              </div>
            </div>
            <div className={styles.photosWrapper}>
            <ul className={styles.photosWrapper_photoList}>
              {project.projectgallery ? project.projectgallery.map((item:any)=> (
                  <li key={item.id} className={styles.photosWrapper_photoList__item}>
                    <Image unoptimized  src={item.url} alt="photo" width={100} height={100}/>
                  </li>
              ) ):null}
              </ul>
            </div>
            <button className={styles.section_button} onClick={()=>back()}>Back</button>
          </section>
         </main>
        </>
    )
}

export const getServerSideProps = async (context: { params: { title: string } })=> {
    const { title } = context.params;

    try {
        const { data } = await axios.post(
          'https://graphql.datocms.com/',
          {
            query: `
          {
            allPortfolios {
              title
              technologyStack
              link
              year
              aboutproject
              projectgallery {
                id
                url
              }
              photo {
                url
              }
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
        const project = data.data.allPortfolios.find((project: { title: string }) => project.title.toLowerCase().trim() === title)

        return {
          props:project 
        }
      } catch (err) {
        console.error(err);
      }
}