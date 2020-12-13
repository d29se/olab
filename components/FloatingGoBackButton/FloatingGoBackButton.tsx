import React, { useEffect, useState, } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
// Style
import style from "./FloatingGoBackButton.module.scss"
// Components
import UpArrowSvg from "../Svg/UpArrowSvg"


function FloatingGoTopButton() {
  const [visible, setVisible] = useState(false)
  const router = useRouter()

  const handleScroll = () => {
    window.scrollY > 0 ? setVisible(true) : setVisible(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => { window.removeEventListener("scroll", handleScroll) }
  }, [])


  return (
    <div className={style.container}>

      <div className={visible ? style.visible : style.hidden} onClick={() => router.back()} >
        <UpArrowSvg />
      </div>

    </div>
  )
}

export default FloatingGoTopButton
