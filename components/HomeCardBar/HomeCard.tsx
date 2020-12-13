import React from 'react'
import style from "./HomeCard.module.scss"

interface CardProps {
  title: string;
  Icon: React.FC;
}

function Card({ title, Icon }: CardProps) {
  return (
    <div className={style.container}>
      <p>{title}</p>
      <i className={style.iconsvg}>
        <Icon />
      </i>

    </div>
  )
}

export default Card
