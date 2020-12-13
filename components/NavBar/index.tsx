import Link from "next/link"
import style from "./navbar.module.scss";
import Burger from "../Burger"
// Icons
// Icons
import TeamSvg from "../Svg/TeamSvg"
import ChemistrySvg from "../Svg/ChemistrySvg"
import PapersStackSvg from "../Svg/PapersStackSvg"
import PhoneEmailSvg from "../Svg/PhoneEmailSvg"

import { AiFillHome } from "react-icons/ai"

function Logo() {
  return (
    <img src="/images/logo.png" alt="logo" className={style.logoImage}></img>
  )
}

interface menuItem {
  name: string;
  link: string;
  Icon?: any
}

function NavBar() {

  const items: Array<menuItem> = [{
    name: "Home",
    link: "/",
    Icon: <AiFillHome />
  }, {
    name: "Members",
    link: "/members",
    Icon: <TeamSvg />,
  }, {
    name: "Research",
    link: "/research",
    Icon: <ChemistrySvg />
  },
  {
    name: "Publications",
    link: "/publications",
    Icon: <PapersStackSvg />
  },
  {
    name: "Contact",
    link: "/contact",
    Icon: <PhoneEmailSvg />
  }]

  const menuItems: Array<any> = items.map((item, index) => (
    <Link href={item.link} key={index} >
      <a className={style.menuItem} >{item.name}</a>
    </Link>
  ))

  return (
    <div className={style.container}>

      <div className={style.logo}>
        <div>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className={style.logoTitle}>
          <Link href="/">
            <a>O'Donoghue Lab</a>
          </Link>
        </div>
      </div>


      <div className={style.menuItems}>
        {menuItems}
      </div>

      <Burger menuItems={items} />

    </div >
  );
}

export default NavBar;
