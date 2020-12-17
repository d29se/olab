import React from 'react'
import Link from 'next/link'
// Typing
import { IPublication } from "../../interfaces/publication.interface"
// Style
import style from "./Publication.module.scss"


function Publication(props: { pubdata: any }) {

  const heading = props.pubdata.title
  const authors = props.pubdata.authors.map((author, i) => {
    // List of publication authors.
    // Comma between names, except last one.
    // Anthony has bold font
    const arrLenght = props.pubdata.authors.length
    return (
      <span key={i} className={author.name.toLowerCase().includes("donoghue") ? style.anthony : null}>{author.name}{i + 1 === arrLenght ? null : ", "}</span>
    )
  })
  const year = props.pubdata.pubdate
  const pmid = props.pubdata.uid
  const doi = props.pubdata.elocationid

  return (
    <div className={style.container}>

      <Link href={`https://pubmed.ncbi.nlm.nih.gov/${pmid}`}  >
        <a target="_blank">
          <p className={style.heading}>{heading}</p>
        </a>
      </Link>
      <p className={style.authors}>{authors}</p>

      <div className={style.articleids}>
        <p>{String(year)}</p>
        <p>PMID: {pmid}</p>
        <p>{doi}</p>
      </div>


    </div>
  )
}

export default Publication
