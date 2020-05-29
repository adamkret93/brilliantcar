import React from 'react'

import Img from "gatsby-image"
import style from './AboutUs.module.scss'

const AboutUs = ({title, descript,img}) => {
    
    return(
        <section className={`${style.aboutUs} ${style.container}`}>
            <Img className={style.aboutUs__image} fluid={img.placeholderImage.childImageSharp.fluid} alt="O nas"/>
            <div className={`${style.aboutUs__box} ${title==="Nasza historia" ? style.aboutUs__boxWide : null}`}>
                <h2 className={style.aboutUs__header}>{title}</h2>
                <div className={style.aboutUs__content} dangerouslySetInnerHTML={{__html: descript}}></div>
            </div>
        </section>
    )
}

export default AboutUs