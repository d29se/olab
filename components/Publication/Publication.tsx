import React from 'react'
import Link from 'next/link'
// Typing
import { IPublication } from "../../interfaces/publication.interface"
// Style
import style from "./Publication.module.scss"


function Publication(props: { pubdata: any }) {
  const pmid = props.pubdata.pmid
  const heading = props.pubdata.passages[0].text
  const journal = props.pubdata.passages[0].infons.journal
  const authors = props.pubdata.authors.map((author, i) => {
    // List of publication authors. Donoghue has secondary color. Comma between names, except last one.
    const arrLenght = props.pubdata.authors.length
    return (
      <span key={i} className={author.toLowerCase().includes("donoghue") ? style.seccolor : null}>{author}{i + 1 === arrLenght ? null : ", "}</span>
    )
  })
  const year = props.pubdata.passages[0].infons.year

  return (
    <div className={style.container}>
      <p className={style.year}>{String(year)}</p>
      <p className={style.heading}>{heading}</p>
      <p className={style.journal}>{journal}</p>
      <p className={style.authors}>{authors}</p>
      <Link href={`https://pubmed.ncbi.nlm.nih.gov/${pmid}`}  >
        <a target="_blank">
          <p className={style.pubmed}>https://pubmed.ncbi.nlm.nih.gov/{pmid}</p>
        </a>
      </Link>
    </div>
  )
}

export default Publication
