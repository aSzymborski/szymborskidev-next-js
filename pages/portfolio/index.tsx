import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/pages/portfolio/Portfolio.module.scss'
import { useEffect } from 'react';

interface Project   {
    id:string
    title:string
    photo:any
}

type Props = {
  projects : Project[]
}
export default function Portfolio ( { projects } :Props ) {

    return (
        <> 
            <main className={`${styles.main} ${styles.container}`}>
            <section className={styles.section}>
                <h1 className={styles.section_title}>Portfolio</h1>
                <ul className={styles.portfolio}>
                    {projects  ? projects .map(({id, photo, title})=> (
                      <Link key={id} href={`/portfolio/${title.toLowerCase().trim()}`}>
                          <li  className={styles.portfolio_item}>
                            <Image className={styles.portfolio_item__image} unoptimized src={photo.url} alt="photo" width={100} height={100}/>
                           </li>
                      </Link>
                    )) : null}
                </ul>
            </section>
            </main>
        </>
    )
}


const token = '231d61a5e5c34c98cec972da3f2d5d'
export const getServerSideProps = async () => {
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
          authorization: `Bearer ${token}`,
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
    const projects = data.data.allPortfolios

    return {
      props: { projects }
    }
  } catch (err) {
    console.error(err);
  }
};