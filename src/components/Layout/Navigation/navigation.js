import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Burger from './Burger/Burger'
import Logo from "../../../assets/images/logo.png"
import style from './navigation.module.scss'
import SideMenu from "./SideMenu/SideMenu"

const Header = () => {
  const [open, setOpen] = useState(false);

  const clickBurgerHandler = () => {
    setOpen(prevOpen => !prevOpen);
  };
  
  useEffect(() => {
    open ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
  });

  return ( 
    <>
      <header className={style.header}>
        <nav className={style.container}>
          <div className={`${style.header__wrapper} ${style.header__wrapperLeft}`}>
            <Link to="/o-nas" className={style.header__item}>Nasza historia</Link>
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
            {/* <Link to="/blog" className={style.header__item}>Blog</Link> */}
            <a href="https://www.facebook.com/brilliantcarstudiodetailingu/" className={`${style.header__item} ${style.header__itemIcon} ${style.header__itemFb}`}>FB</a>
            <a href="https://www.instagram.com/brilliantcarstudio/" className={`${style.header__item} ${style.header__itemIcon} ${style.header__itemInsta}`}>INSTAGRAM</a>
          </div>
        </nav>
      </header> 

      <Burger open={open} click={clickBurgerHandler}/>
      <SideMenu open={open} className={style.header__wrapper}>
        <Link to="/" className={style.header__item}>Strona główna</Link>
        <Link to="/o-nas" className={style.header__item}>Nasza historia</Link>
        <Link to="/uslugi" className={style.header__item}>Usługi</Link>
        <Link to="/realizacje" className={style.header__item}>Realizacje</Link>
        <Link to="/kontakt" className={style.header__item}>Kontakt</Link>
        {/* <Link to="/blog" className={style.header__item}>Blog</Link> */}
        <a href="https://www.facebook.com/brilliantcarstudiodetailingu/" className={`${style.header__item} ${style.header__itemIcon} ${style.header__itemFb}`}>FB</a>
        <a href="https://www.instagram.com/brilliantcarstudio/" className={`${style.header__item} ${style.header__itemIcon} ${style.header__itemInsta}`}>INSTAGRAM</a>
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
