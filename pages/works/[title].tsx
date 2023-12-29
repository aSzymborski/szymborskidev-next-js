import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from './workProject.module.scss'
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import Head from "next/head";


interface Project {
  id: string
  title: string
  photo: any
  link: string
  year: string
  aboutproject: string
  technologyStack: string
  projectgallery: string[]
}

export default function PortfolioProject() {
  const [projectData, setProjectData] = useState<Project>({ id: '', title: '', photo: '', link: '', year: '', aboutproject: '', technologyStack: '', projectgallery: [] })

  const title = usePathname()

  useEffect(() => {
    getData(title)
  }, [title])

  const getData = async (title: any) => {
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
      if (!data) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          }
        }
      }

      const project = data.data.allPortfolios.find((project: { title: string }) => title.includes(project.title.toLowerCase().replace(/\s/g, '')))
      setProjectData(project)

    } catch (err) {
      console.error(err);
    }
  }
  const { back } = useRouter()
  return (
    <>
      <Head>
        <title>SzymborskiDev | {projectData.title}</title>
      </Head>

      <section className={`${styles.section} ${styles.container}`}>
        <h1 className={styles.section_title}>{projectData.title}</h1>
        <div className={styles.contentWrapper}>
          <ul className={styles.contentWrapper_list}>
            <li className={styles.contentWrapper_list__item}>
              <p>Technology Stack</p>
              <p>{projectData.technologyStack}</p>
            </li>
            <li className={styles.contentWrapper_list__item}>
              <p>Year</p>
              <p>{projectData.year}</p>
            </li>
            <li className={styles.contentWrapper_list__item}>
              <p>Link</p>
              <a className={`${styles.effectZoom}`} href={projectData.link} target="_blank" rel="noreferrer">{projectData.title}</a>
            </li>
          </ul>
          <div className={styles.contentWrapper_aboutWrapper}>
            <p>{projectData.aboutproject}</p>
          </div>
        </div>
        <div className={styles.photosWrapper}>
          <ul className={styles.photosWrapper_photoList}>
            {projectData.projectgallery ? projectData.projectgallery.map((item: any) => (
              <li key={item.id} className={styles.photosWrapper_photoList__item}>
                <Image unoptimized src={item.url} alt="photo" width={100} height={100} />
              </li>
            )) : null}
          </ul>
        </div>
        <button className={`${styles.section_button} ${styles.effectZoom}}`} onClick={() => back()}>Back</button>
      </section>
    </>
  )
}
