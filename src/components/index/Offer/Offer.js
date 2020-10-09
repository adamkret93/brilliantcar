import React from 'react'
import {Link} from 'gatsby'

import style from './Offer.module.scss'
import Logo from '../../../assets/images/logo.svg'

const Offer = () => (
    <section className={`${style.offer} ${style.container}`}>
        <h2 className={style.offer__header}>Co możemy dla Ciebie zrobić?</h2>
        <div className={style.offer__content}>
            <div className={`${style.offer__item} ${style.offer__itemOne}`}>
                <div className={style.offer__carIcon}></div>
                <div className={style.offer__itemContent}>
                    <h3 className={style.offer__itemHeader}>Ochrona lakieru</h3>
                    <p>Wkrótce więcej informacji...</p>
                </div>
                <span className={style.offer__circle}></span>
            </div>
            <div className={`${style.offer__item} ${style.offer__itemTwo}`}>
                <div className={style.offer__carIcon}></div>
                <div className={style.offer__itemContent}>
                    <h3 className={style.offer__itemHeader}>Bieżąca pielęgnacja</h3>
                    <p>Wkrótce więcej informacji...</p>
                </div>
                <span className={style.offer__circle}></span>
            </div>
            <div className={`${style.offer__item} ${style.offer__itemThree}`}>
                <div className={style.offer__carIcon}></div>
                <div className={style.offer__itemContent}>
                    <h3 className={style.offer__itemHeader}>Renowacja lakieru</h3>
                    <p>Wkrótce więcej informacji...</p>
                </div>
                <span className={style.offer__circle}></span>
            </div>
        </div>
        <img className={style.offer__logo} src={Logo} alt="Logo"/>
        {/* <Link to='/uslugi' className={style.offer__link}>Sprawdź pełną ofertę</Link> */}
    </section>
)

export default Offer