import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../../../assets/images/logo.svg"
import style from './header.module.scss'

const Header = () => (
  <header className={style.header}>
    <div className={style.container}>
      <div className={`${style.header__wrapper} ${style.header__wrapperLeft}`}>
        <Link to="/page3" className={style.header__item}>Nasza historia</Link>
        <Link to="/uslugi" className={style.header__item}>Usługi</Link>
        <Link to="/realizacje" className={style.header__item}>Realizacje</Link>
      </div>
      <div className={style.header__wrapper}>
        <Link to="/" className={`${style.header__item} ${style.header__logo}`}>
          <img src={Logo} alt='Logo - Brilliant Car'/>
        </Link>
      </div>
      <div className={`${style.header__wrapper} ${style.header__wrapperRight}`}>
        <Link to="/kontakt" className={style.header__item}>Kontakt</Link>
        <Link to="/blog" className={style.header__item}>Blog</Link>
        <Link to="fb" className={style.header__item}>FB</Link>
        <Link to="insta" className={style.header__item}>INSTAGRAM</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
