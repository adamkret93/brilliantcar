import React from 'react'

import style from './Burger.module.scss'

const burger = (props) => (
    <button className={` ${style.burger} ${ props.open ? style.burgerActive : null} `} onClick={props.click}>
        <div className={style.burger__item}></div>
        <div className={style.burger__item}></div>
        <div className={style.burger__item}></div>
    </button>
)

export default burger;