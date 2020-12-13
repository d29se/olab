import React from 'react'
import style from "./footer.module.scss"

function Footer() {
    const year = new Date().getFullYear()

    return (
        <div className={style.container}>
            <p className={style.copyright}>© {year} O'Donoghue Lab</p>
        </div>
    )
}

export default Footer
