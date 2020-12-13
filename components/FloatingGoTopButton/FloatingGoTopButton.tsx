import React, { useEffect, useState } from 'react'
import Link from "next/link"
// Style
import style from "./FloatingGoTopButton.module.scss"
// Components
import UpArrowSvg from "../Svg/UpArrowSvg"


function FloatingGoTopButton() {
  const [visible, setVisible] = useState(false)

  const handleScroll = () => {
    window.scrollY > 0 ? setVisible(true) : setVisible(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => { window.removeEventListener("scroll", handleScroll) }
  }, [])


  return (
    <div className={style.container}>
      <Link href="#" scroll>
        <a>
          <div className={visible ? style.visible : style.hidden} >
            <UpArrowSvg />
          </div>
        </a>
      </Link >
    </div>
  )
}

export default FloatingGoTopButton
