import Link from 'next/link';
import styles from '@/components/molecules/MenuList/MenuList.module.scss'

interface Props {
    isOpen:boolean,
    toggle: React.Dispatch<React.SetStateAction<boolean>>
  }

interface MenuItem {
    redirect:string;
    text:string;
  }

export default function MenuList(props:Props) {
    const menuItems:MenuItem[] = [
        {
            redirect:'/aboutme',
            text:'About Me'
        },
        {
            redirect:'/portfolio',
            text:'Portfolio'
        },
        {
            redirect:'/contact',
            text:'Contact'
        },
    ]

  return (
    <>
    <ul className={`${styles.menuList} ${props.isOpen ? styles.show : styles.hide}`}>
        {menuItems ? menuItems.map(menuItem => (
            <li key={menuItem.text} className={`${styles.menuList_item} ${styles.effectZoom}`} onClick={()=> props.toggle((state)=> !state)}>
                <Link  href={menuItem.redirect}>
                    {menuItem.text}
                </Link>
            </li>
        )): null}
        <li className={`${styles.menuList_item} ${styles.effectZoom}`}>
            <a href="https://github.com">GitHub</a>
        </li>
    </ul>
    </>
  )
}
