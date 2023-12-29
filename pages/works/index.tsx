import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import styles from './workSection.module.scss'
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation'

interface Project {
  id: string
  title: string
  photo: any
}

export default function WorkSection() {
  const [data, setData] = useState<Array<Project>>([])

  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    getData()
    handleReturnToHomePage()
  }, [])

  const handleReturnToHomePage = () => {
    if (pathname === '/works') {
      router.push('/')
    }
  }

  const getData = async () => {
    try {
      const { data } = await axios.post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
          allPortfolios {
            id
            title
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
      const projects = data.data.allPortfolios
      setData(projects)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section id='works_section' className={styles.section}>
        <p className={styles.section_subtitle}>Work</p>
        <h1 className={styles.section_title}>See some of my works</h1>
        <ul className={styles.portfolio}>
          {data ? data.map(({ id, photo, title }) => (
            <Link key={id} href={`/works/${title.toLowerCase().replace(/\s/g, '')}`}>
              <li className={styles.portfolio_item}>
                <Image className={styles.portfolio_item__image} unoptimized src={photo.url} alt="photo" width={100} height={100} />
              </li>
            </Link>
          )) : null}
        </ul>
      </section>
    </>
  )
}


