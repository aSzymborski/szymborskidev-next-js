import { useEffect, useState } from 'react';
import styles from './cardProject.module.scss'

interface Project {
    id: string
    title: string
    photo: any
    index: number
    totalProjects: number; 
  }
  

export default function Card(project: Project) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.matchMedia('(max-width: 1199px)').matches);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return (
      <div
      key={project.id}
      className={isMobile ? `group relative w-screen overflow-hidden bg-neutral-200` : `group relative h-screen w-screen overflow-hidden bg-neutral-200`}>
        <div className={styles.overlay}>
</div>
      <div
        style={{
          backgroundImage: `url(${project.photo.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={isMobile ? `${styles.mobileView}` : `absolute inset-0 z-0 transition-transform duration-300`}
      ></div>
        <div className={`${styles.projectDescription} z-10`}>
          <span>0{project.index + 1}-0{project.totalProjects}</span>
        <p className={`${styles.title} uppercase`}>
        {project.title}
        </p>
      </div>
    </div>

    );
  };