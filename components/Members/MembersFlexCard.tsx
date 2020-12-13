import Link from "next/link"
import { useRouter } from "next/router"
// Styles
import style from "./MembersFlexCard.module.scss"
// Types
import { IMember } from "../../interfaces/member.interface"
// Components
import MemberProfilePhoto from "./MembersProfilePhoto"


function MemberFlexCard(props: { member: IMember }) {
    const fullName: string = props.member.firstName + " " + props.member.middleName + " " + props.member.lastName

    // TODO Learn what's different between Link and router.push()
    // const handleClick = (e: Event) => {
    //     e.preventDefault()
    //     router.push({
    //         pathname: "/member/[id]",
    //         query: { id: props.member.id }
    //     })
    // }

    return (
        <Link href={`/members/${props.member.id}`}>
            <div className={style.container}>

                <MemberProfilePhoto member={props.member} />

                <p className={style.name}>{fullName}</p>
                <p className={style.position}>{props.member.position}</p>

            </div>
        </Link>

    )
}

export default MemberFlexCard
