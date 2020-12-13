import React from 'react'
import Link from "next/link"
// Style
import style from "./contact.module.scss"


function Contact() {
  return (
    <div className={style.container}>

      <div className={style.heading}>
        <p className={style.headingTitle}>Contact</p>
      </div>


      <div className={style.addressFlex}>
        <div className={style.address}>
          <p>9500 Gilman Drive</p>
          <p>San Diego, CA, 92093</p>
          <p>
            <Link href="mailto:ajodonoghue@ucsd.edu">
              <a>
                ajodonoghue@ucsd.edu
            </a>
            </Link>
          </p>
          <div className={style.maps}>
            <Link href="https://goo.gl/maps/tJtf4rk41bMg39kB8">
              <a>
                <img src="/images/maps_logo_google.png" alt="Google Maps Logo" />
              </a>
            </Link>
            <Link href="https://maps.apple.com/?q=Skaggs+Pharmaceutical+Sciences+Building">
              <a>
                <img src="/images/maps_logo_apple.png" alt="Apple Maps Logo" />
              </a>
            </Link>
            <Link href="https://www.openstreetmap.org/way/103615499">
              <a>
                <img src="/images/maps_logo_osm.png" alt="Apple Maps Logo" />
              </a>
            </Link>
          </div>
        </div>

        <div className={style.mapsFlex}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.8999798970754!2d-117.23786708490535!3d32.87436568632276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06cf70a030bd%3A0xf8da1152881ec2d1!2sSkaggs%20School%20of%20Pharmacy%20and%20Pharmaceutical%20Sciences!5e0!3m2!1sen!2sus!4v1607771376087!5m2!1sen!2sus" className={style.embeddedMap} frameBorder="0" tabIndex={0} allowFullScreen={false}></iframe>
        </div>

      </div>

    </div>
  )
}

export default Contact





