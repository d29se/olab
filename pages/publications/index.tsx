import React, { useState, useEffect } from 'react'
import { getPubIds } from "../../lib/pubmedApi"
// Components
import PublicationsHeading from "../../components/PublicationsHeading/PublicationsHeading"
import Publication from "../../components/Publication/Publication"
import FloatingGoTopButton from "../../components/FloatingGoTopButton/FloatingGoTopButton"
// Lib
import { getPublications } from "../../lib/pubmedApi"
// Mocks
import { mockPublications } from "../../mocks/mockPublications"



function Publications() {
  // There is an issue with getting data directly from pubmed. For now, publications are stored locally.
  const [pubIds, setpubIds] = useState([])
  const [publications, setpublications] = useState([])

  // useEffect(() => {
  //   getPubIds("O'Donoghue+Anthony+J").then((data) => {
  //     setpubIds(data)
  //   })
  //   getPublications([28424202, 29725596]).then((data) => {
  //     setpublications(data)
  //   })
  // }, [])

  return (
    <div>
      <PublicationsHeading />
      <FloatingGoTopButton />

      {mockPublications.map((publicationData, index) => {
        return (
          <Publication pubdata={publicationData} key={index} />
        )
      })}

    </div>
  )
}

export default Publications
