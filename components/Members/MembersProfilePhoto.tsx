import React from 'react'
// Types
import { IMember } from "../../interfaces/member.interface"
// Styles
import style from "./MembersProfilePhoto.module.scss"

function MemberProfilePhoto(props: { member: IMember }) {
  const fullName: string = props.member.firstName + " " + props.member.middleName + " " + props.member.lastName
  const imageFileUrl: string = "/images/membersPhotos/" + props.member.photoFile

  const noPhoto = (e: any) => {
    e.target.onError = null
    e.target.src = "/images/membersPhotos/default.png"
  }

  return (
    <div className={style.container}>
      <img src={imageFileUrl} alt={`${fullName} photo`} onError={noPhoto} />
    </div>
  )
}

export default MemberProfilePhoto