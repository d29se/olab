import React, { useState, useEffect } from 'react'
// Components
import PublicationsHeading from "../../components/PublicationsHeading/PublicationsHeading"
import Publication from "../../components/Publication/Publication"
import FloatingGoTopButton from "../../components/FloatingGoTopButton/FloatingGoTopButton"
// Mocks
import { mockPublications } from "../../mocks/mockPublications"
// Style
import style from "./publications.module.scss"
// API
import { parsedData } from "../api/pubmed"


function Publications() {
  const [publications, setpublications] = useState([])

  useEffect(() => {
    parsedData().then((ApiResponse) => {
      setpublications(ApiResponse)
    })
  }, [])

  return (
    <div className={style.container}>
      <PublicationsHeading />
      <FloatingGoTopButton />

      <div className={style.publicationsFlex}>
        {
          publications.map((item, index) => {
            return (
              <Publication pubdata={item} key={index} />
            )

          })
        }

      </div>

    </div>
  )
}

export default Publications
