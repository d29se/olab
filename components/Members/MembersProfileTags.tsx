import React from 'react'
// Style
import style from "./MembersProfileTags.module.scss"

function MembersProfileTags(props: { tags: Array<any> }) {
  return (
    <div className={style.container}>
      {props.tags ?
        <div className={style.tags}>
          {props.tags.map((tag, index) => <a key={index} href={tag.url} target="_blank">{tag.label}</a>)}
        </div>
        :
        null
      }
    </div>
  )
}

export default MembersProfileTags
