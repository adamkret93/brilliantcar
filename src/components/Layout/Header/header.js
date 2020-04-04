import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Burger from './Burger/Burger'
import Logo from "../../../assets/images/logo.svg"
import style from './header.module.scss'
import SideMenu from "./SideMenu/SideMenu"

const Header = () => {

  const [open, setOpen] = useState(false);

  function clickBurgerHandler () {
    setOpen(prevOpen => !prevOpen);
  }
  
  useEffect(() => {
    open ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
  });

  return ( 
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={`${style.header__wrapper} ${style.header__wrapperLeft}`}>
            <Link to="/page3" className={style.header__item}>Nasza historia</Link>
            <Link to="/uslugi" className={style.header__item}>Usługi</Link>
            <Link to="/realizacje" className={style.header__item}>Realizacje</Link>
          </div>
          <div className={style.header__wrapper}>
            <Link to="/" className={`${style.header__item} ${style.header__logo}`}>
              <img className={style.header__img} src={Logo} alt='Logo - Brilliant Car'/>
            </Link>
          </div>
          <div className={`${style.header__wrapper} ${style.header__wrapperRight}`}>
            <Link to="/kontakt" className={style.header__item}>Kontakt</Link>
            <Link to="/blog" className={style.header__item}>Blog</Link>
            <Link to="fb" className={`${style.header__item} ${style.header__itemIcon} ${style.header__itemFb}`}>FB</Link>
            <Link to="insta" className={`${style.header__item} ${style.header__itemIcon} ${style.header__itemInsta}`}>INSTAGRAM</Link>
          </div>
        </div>
      </header>

      <Burger open={open} click={clickBurgerHandler}/>
      <SideMenu open={open} className={style.header__wrapper}>
        <Link to="/page3" className={style.header__item}>Nasza historia</Link>
        <Link to="/uslugi" className={style.header__item}>Usługi</Link>
        <Link to="/realizacje" className={style.header__item}>Realizacje</Link>
        <Link to="/kontakt" className={style.header__item}>Kontakt</Link>
        <Link to="/blog" className={style.header__item}>Blog</Link>
        <Link to="fb" className={`${style.header__item} ${style.header__itemIcon} ${style.header__itemFb}`}>FB</Link>
        <Link to="insta" className={`${style.header__item} ${style.header__itemIcon} ${style.header__itemInsta}`}>INSTAGRAM</Link>
      </SideMenu>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
