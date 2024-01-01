import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';
import styles from './horizontalScrollCarousel.module.scss'
import Card from "../CardProject/CardProject";

interface Project {
    id: string
    title: string
    photo: any
  }

export default function HorizontalScrollCarousel(data: any) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["0.2%", "-80.3%"]);
      
    return (
      <section ref={targetRef} className={`${styles.carousel} relative h-[300vh]`}>
        <div className="sticky top-1 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-1">
            {data.data.map((project: Project, index: number ) => {
              return <Card id={project.id} photo={project.photo} title={project.title} index={index} totalProjects={data.data.length}  key={project.id}/>;
            })}
          </motion.div>
        </div>
      </section>
    );
  };