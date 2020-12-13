import React from 'react'
import Link from "next/link"
// Style
import style from "./HomeCardBar.module.scss"
// Components
import HomeCard from "./HomeCard"
// Icons
import TeamSvg from "../Svg/TeamSvg"
import ChemistrySvg from "../Svg/ChemistrySvg"
import PapersStackSvg from "../Svg/PapersStackSvg"
import PhoneEmailSvg from "../Svg/PhoneEmailSvg"

function HomeCardBar() {
  return (
    <div className={style.container}>
      <Link href="/members">
        <a>
          <HomeCard title="Meet the Lab" Icon={TeamSvg} />
        </a>
      </Link>
      <Link href="/research">
        <a>
          <HomeCard title="Our research" Icon={ChemistrySvg} />
        </a>
      </Link>
      <Link href="/publications">
        <a>
          <HomeCard title="Publications" Icon={PapersStackSvg} />
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <HomeCard title="Contact us" Icon={PhoneEmailSvg} />
        </a>
      </Link>
    </div>
  )
}

export default HomeCardBar
