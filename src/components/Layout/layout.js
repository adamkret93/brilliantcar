

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import "./layout.scss"
import "../../assets/scss/style.scss"
import style from './footer.module.scss'
import Location from '../../assets/images/location.svg'
import Tel from '../../assets/images/tel.svg'
import Email from '../../assets/images/email.svg'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          author_email
        }
      }
    }
  `)

  return (
    <>
      <Header/>
      <div className='content'>
        <main>{children}</main>
      </div>
      <footer className={style.footer}>
        <div className="container">
          <div className={style.contactData}>
            <div className={style.contactData__item}>
              <a className={style.contactData__link} href="https://g.page/brilliantcarstudiodetailingu?share" >
                <img className={style.contactData__img} src={Location} alt="location" />
                ul. Jurajska 20,<br/>32-085 Modlnica
              </a>
            </div>
            <div className={style.contactData__item}>
              <a className={style.contactData__link} href="tel:+48 721 000 010" >
                <img className={style.contactData__img} src={Tel} alt="telphone" />
                +48 721 000 010
              </a>
            </div>
            <div className={style.contactData__item}>
              <a className={style.contactData__link} href="mailto:brilliantcarstudio@gmail.com">
                <img className={style.contactData__img} src={Email} alt="e-mail"/>
                brilliantcarstudio@gmail.com
              </a>
            </div> 
          </div>
          <p className={style.hours}>Poniedziałek - Piątek 9:00 - 17:00</p>
          <div className={style.copyright}>
            <p className={style.copyright__paragraph}>{new Date().getFullYear()} © Wszystkie prawa zastrzeżone</p>
            <p className={style.copyright__paragraph}>Kopiowanie i wykorzystywanie zdjęć produktów bez zgody autora zabronione.<br/> 
              Strona korzysta z informacji przechowywanych w plikach cookies w celach funkcjonalnych oraz statystycznych.</p>
          </div>
          <p className={style.created}>Created by <a className={style.created__link} href={"mailto:"+data.site.siteMetadata.author_email}>{data.site.siteMetadata.author}</a></p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
