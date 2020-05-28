import React from 'react'

import style from './header.module.scss'

const Header = ({title, desc, side}) => {
    const titlePage = title.split(" ");
    let titleText = '';
    
    if(titlePage.length > 1){
        titleText = titlePage.map((val, index) => {
            if(index === titlePage.length-1){
               return <span key={index}>{val}</span>;
            } else {
                return `${val} `;
            }
        });
        
    } else {
        titleText += titlePage[0];
    }
    return(
        <div className={`${style.header__wrapper} container`}>
            <header className={style.header}>
                <h1 className={style.header__title}>{titleText}</h1>
            </header>
            {desc ? <div className={`${style.header__descript} ${style["header__descript"+side]}`}>{desc}</div> : null} 
        </div>
    )
}

export default Header