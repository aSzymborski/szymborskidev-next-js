/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import styles from './homeSection.module.scss'
import Link from 'next/link';
import arrowicon from 'assets/arrow icon.svg'
import Image from 'next/image';

export default function HomeSection() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function formatDate(date: any) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return ` ${hours}:${minutes}:${seconds}`;
    }

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        let hrefTarget = e.currentTarget.href;
        e.preventDefault();
        setTimeout(() => {
            const href = hrefTarget;
            const targetId = href.replace(/.*\#/, '');
            const elem = document.getElementById(targetId);
            elem?.scrollIntoView({
                behavior: 'smooth',
            });
        }, 200);
    };

    return (
        <>
            <section className={styles.homeSection}>
                <div className={styles.leftBox}>
                    <div>
                        <p className={`${styles.title}`}><span className={`${styles.bold}`}>Hello</span> I'm Adrian<br /> frontend developer </p>
                    </div>
                    <div className={styles.timeWrapper}>
                        <p><span className={styles.bold}>based in Warsaw</span></p>
                        <p>{formatDate(currentDate)}</p>
                    </div>
                </div>
                <div className={styles.rightBox}>
                    <p className={styles.text}>Creative and independent Front-End Developer with two years of experience building stable apps and websites in fast-paced. I am self-taught.</p>
                    <Link className={`${styles.effectZoom} ${styles.whiteHrefBtn} `} href="#aboutme_section" onClick={handleScroll} >More about me <Image src={arrowicon} alt='arrowicon' /></Link>
                </div>
            </section></>
    )
}

