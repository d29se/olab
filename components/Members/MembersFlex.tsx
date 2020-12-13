
import React from 'react'
// Style
import style from "./MembersFlex.module.scss"
// Components
import MemberFlexCard from "./MembersFlexCard"
// Types
import { IMember } from "../../interfaces/member.interface"

function LabMembersFlex(props: { members: Array<IMember> }) {
  const sortedByRank = props.members.sort((a, b) => a.rank - b.rank)

  return (
    <div className={style.container}>
      {sortedByRank.map(member => <MemberFlexCard key={member.id} member={member} />)}
    </div>
  )
}

export default LabMembersFlex
