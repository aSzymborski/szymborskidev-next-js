import Link from 'next/link';
import styles from './MenuList.module.scss'

interface Props {
    isOpen: boolean,
    toggle: React.Dispatch<React.SetStateAction<boolean>>
}

interface MenuItem {
    redirect: string;
    text: string;
    description: string;
}

export default function MenuList(props: Props) {
    const menuItems: MenuItem[] = [
        {
            redirect: '#aboutme_section',
            text: 'ABOUT ME',
            description: 'a little about me'
        },
        {
            redirect: '#works_section',
            text: 'WORK',
            description: 'see some of my works'
        },
        {
            redirect: '#contact_section',
            text: 'CONTACT',
            description: 'yes, we have email and phone'
        },
    ]

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
        }, 1000);
    };

    return (
        <>
            <ul className={`${styles.menuList} ${props.isOpen ? styles.show : styles.hide}`}>
                {menuItems ? menuItems.map(menuItem => (
                    <li key={menuItem.text} className={`${styles.menuList_item} ${styles.effectZoom}`} onClick={() => props.toggle((state) => !state)}>
                        <Link href={menuItem.redirect} onClick={handleScroll}>
                            {menuItem.text}
                        </Link>
                        <span className={styles.menuList_item__description}>{menuItem.description}</span>
                    </li>
                )) : null}
                <li className={`${styles.menuList_item} ${styles.effectZoom}`}>
                    <a href="https://github.com/aSzymborski">GITHUB</a>
                    <span className={styles.menuList_item__description}>see me github</span>
                </li>
            </ul>
        </>
    )
}
