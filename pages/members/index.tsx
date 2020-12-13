import React, { useState, useEffect } from 'react'
import { GetStaticProps } from "next"
// Mocks
import { mockMembers } from "../../mocks/mockMembers"
// Style
import style from "./members.module.scss"
// Type
import { IMember } from "../../interfaces/member.interface"
// Components
import MembersHeading from "../../components/MembersHeading/MembersHeading"
import MembersFlex from "../../components/Members/MembersFlex"
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch"


function Members(props: { members: Array<IMember> }) {
    const [members, setmembers] = useState([])
    const [formerMembersChecked, setformerMembersChecked] = useState(false)

    useEffect(() => {
        formerMembersChecked ?
            setmembers(
                props.members.filter(member => member.current == false)
            )
            :
            setmembers(
                props.members.filter(member => member.current == true)
            )
    }, [formerMembersChecked])

    return (
        <div className={style.container}>
            <div className={style.heading}>
                <MembersHeading />
            </div>
            <div className={style.toggleSwitch}>
                <span className={formerMembersChecked ? style.seccolor : style.greycol}>Former members</span>
                <ToggleSwitch checked={formerMembersChecked} onChange={setformerMembersChecked} />
            </div>
            <div className={style.membersFlex}>
                <MembersFlex members={members} />
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const members: Array<IMember> = mockMembers

    return {
        props: {
            members: members,
        }
    }
}

export default Members
