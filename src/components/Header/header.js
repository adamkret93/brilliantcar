import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div>
      
        <Link to="/page3" className={style.header__item}>
          Nasza historia
        </Link>
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
