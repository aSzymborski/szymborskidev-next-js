import { Pivot as Hamburger } from 'hamburger-react'
import MenuList from './MenuList/MenuList'
import styles from './Menu.module.scss'

interface Props {
  isOpen: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu(props: Props) {
  return (
    <>
      <menu className={styles.menu}>
        <div className={styles.menu_hamburgerBtnWrapper}>
          <Hamburger toggled={props.isOpen} toggle={props.toggle} size={40} />
        </div>
        <MenuList isOpen={props.isOpen} toggle={props.toggle} />
      </menu>
    </>
  )
}
