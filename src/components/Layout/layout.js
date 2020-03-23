

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
        }
      }
    }
  `)

  return (
    <>
      <Header/>
      <div className='container'>
        <main>{children}</main>
      </div>
      <footer className={style.footer}>
        <div className="container">
          <div className={style.contactData}>
            <div className={style.contactData__item}>
              <img src={Location} />
              <a href="https://g.page/brilliantcarstudiodetailingu?share">ul. Jurajska 20,<br/>32-085 Modlnica</a>
            </div>
            <div className={style.contactData__item}>
              <img src={Tel}/>
              <a href="tel:+48 721 000 010">+48 721 000 010</a>
            </div>
            <div className={style.contactData__item}>
              <img src={Email}/>
              <a href="mailto:brilliantcarstudio@gmail.com">brilliantcarstudio@gmail.com</a>
            </div>
          </div>
          <div className={style.hours}>
            Poniedziałek - Piątek 9:00 - 17:00
          </div>
          © {new Date().getFullYear()} Wszystkie prawa zastrzeżone
          <a href="https://www.gatsbyjs.org">{data.site.siteMetadata.author}</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
