import { useState } from 'react'
import Link from 'next/link'
import style from "./burger.module.scss"
import { FiMenu as BurgerIcon } from 'react-icons/fi'


interface menuItem {
  name: string;
  link: string;
  Icon?: any
}

function Burger(props: { menuItems: Array<menuItem> }) {
  const menuItems = props.menuItems
  const [isOpen, setisOpen] = useState(false)

  const showBurger = () => {
    setisOpen(!isOpen)
  }

  const menu: Array<any> = menuItems.map((item, index) => (
    <Link href={item.link} key={index} >
      <a className={style.menuItem} onClick={showBurger}>{item.name} {item.Icon} </a>
    </Link>
  ))

  return (
    <div>
      <BurgerIcon className={style.burgerIcon} onClick={showBurger} />
      <div className={isOpen ? style.burgerPane : style.hidden}>
        {menu}
      </div>
      <div className={isOpen ? style.fakeFloor : style.hidden} onClick={showBurger} />
    </div>
  )
}

export default Burger