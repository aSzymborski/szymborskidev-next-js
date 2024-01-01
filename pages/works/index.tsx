import axios from 'axios';
import styles from './workSection.module.scss'
import { useEffect, useState } from 'react';
import HorizontalScrollCarousel from '@/components/elements/HorizontalScrollCarousel/HorizonstalScrollCarousel';
import ColumnScrollCarousel from '@/components/elements/ColumnScrollCarousel/ColumnScrollCarousel';

interface Project {
  id: string
  title: string
  photo: any
}

export default function WorkSection() {
  const [data, setData] = useState<Array<Project>>([])
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1199px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            authorization: `Bearer 231d61a5e5c34c98cec972da3f2d5d`,
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
        {isMobile ? <ColumnScrollCarousel data={data} /> : <HorizontalScrollCarousel data={data} /> }
      </section>
    </>
  )
}


