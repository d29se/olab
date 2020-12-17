import React, { useState, useEffect } from 'react'
import Link from "next/link"
// Components
import PublicationsHeading from "../../components/PublicationsHeading/PublicationsHeading"
import Publication from "../../components/Publication/Publication"
import FloatingGoTopButton from "../../components/FloatingGoTopButton/FloatingGoTopButton"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
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
          publications == null ?
            <div className={style.pubmedfailed}>
              <p>Loading data from PubMed failed</p>
              <p>
                Please, follow
              <Link href="https://pubmed.ncbi.nlm.nih.gov/?term=O%27Donoghue%2BAnthony%2BJ%5BFull+Author+Name%5D&sort=date">
                  <a target="_blank">
                    <span className={style.directLink}> Direct link</span>
                  </a>
                </Link>
              </p>

            </div>
            :
            publications.length > 0 ?
              publications.map((item, index) => {
                return (
                  <Publication pubdata={item} key={index} />
                )
              })
              :
              <div className={style.loading}>
                <LoadingSpinner />
              </div>
        }

      </div>

    </div>
  )
}

export default Publications
