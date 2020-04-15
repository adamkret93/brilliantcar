import React from 'react'
import style from './SocialMedia.module.scss'

const SocialMedia = () => (
    <section className={`${style.socialMedia} ${style.container}`}>
        <h2 className={style.socialMedia__header}>Jesteśmy w social media</h2>
        <div className={style.socialMedia__wrapper}>
            <a href="https://www.facebook.com/brilliantcarstudiodetailingu/" className={`${style.socialMedia__item} ${style.socialMedia__itemFb}`}>FB</a>
            <a href="https://www.instagram.com/brilliantcarstudio/" className={`${style.socialMedia__item} ${style.socialMedia__itemInsta}`}>INSTAGRAM</a>
        </div>
    </section>
)

export default SocialMedia