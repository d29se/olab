import { useRouter } from "next/router"
import { GetStaticProps, GetStaticPaths } from "next"
// Mocks
import { mockMembers } from "../../mocks/mockMembers"
// Components
import MemberProfilePhoto from "../../components/Members/MembersProfilePhoto"
// Types
import { IMember } from "../../interfaces/member.interface"
// Styles
import style from "./members.module.scss"
// Icons
import AlmaMater from "../../components/Svg/AlmaMaterSvg"
import EducationSvg from "../../components/Svg/EducationSvg"
// Components
import Tags from "../../components/Members/MembersProfileTags"
import FloatingGoBackButton from "../../components/FloatingGoBackButton/FloatingGoBackButton"


function MemberDetail(props: { member: IMember }) {
  const fullName: string = props.member.firstName + " " + props.member.middleName + " " + props.member.lastName

  return (
    <div className={style.memberDetail}>

      <FloatingGoBackButton />


      <div className={style.profileHeading}>
        <div className={style.headingPhoto}>
          <MemberProfilePhoto member={props.member} />
        </div>
        <div className={style.headingTitle}>
          <p className={style.position}>{props.member.position}</p>
          <p className={style.fullName}>{fullName}</p>
        </div>
      </div>


      <div className={style.memberInfoContainer}>

        <div className={style.memberInfo}>
          <div className={style.education}>
            <EducationSvg />
            <p>{props.member.education}</p>
          </div>

          <div className={style.almaMater}>
            <AlmaMater />
            <p>{props.member.almaMater}</p>
          </div>
        </div>

        <div className={style.bio}>
          <p>Bio</p>
          <p>{props.member.bio}</p>

        </div>

      </div>

      <div className={style.tagsPane}>
        <Tags tags={props.member.tags} />
      </div>

    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const members: Array<IMember> = mockMembers
  const paths = members.map((member: IMember) => ({
    params: { id: member.id }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const members: Array<IMember> = mockMembers
  const memberId = params.id
  const member = members.find((element: IMember) => element.id === memberId);

  return {
    props: { member: member }
  }
}

export default MemberDetail
