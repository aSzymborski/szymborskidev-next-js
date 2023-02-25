/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import styles from '@/components/organisms/Nav/Nav.module.scss'
import Menu from '@/components/molecules/Menu/Menu'
import Link from 'next/link'


export default function Nav() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
    <nav className={styles.nav}>
      <Link onClick={()=>setOpen(false)} className={`${styles.nav_homeBtn} ${styles.effectZoom}`} href='/'>Szymborski<span className={styles.nav_homeBtn__span}>Dev</span></Link>
        <div>
          <Menu isOpen={isOpen} toggle={setOpen}/>
        </div>
    </nav>
    </>
  )
}
