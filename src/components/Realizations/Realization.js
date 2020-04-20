import React from 'react'
import Image from "gatsby-image"

import style from './Realization.module.scss'

const Realization = ({side, data}) => {
  
  const descript = data.html;
    console.log(data.html);
  return(
    <div className={`${style.realization} ${style["realization"+side]}`}>
        <div className={style.gallery}>
            <div className={`${style.gallery__item} ${style.gallery__itemOne}`}><Image fluid={data.frontmatter.image1.childImageSharp.fluid}/></div>
            <div className={`${style.gallery__item} ${style.gallery__itemTwo}`}><Image fluid={data.frontmatter.image2.childImageSharp.fluid}/></div>
            <div className={`${style.gallery__item} ${style.gallery__itemThree}`}><Image fluid={data.frontmatter.image3.childImageSharp.fluid}/></div>
            <div className={`${style.gallery__item} ${style.gallery__itemFour}`}><Image fluid={data.frontmatter.image4.childImageSharp.fluid}/></div> 
            <div className={`${style.gallery__item} ${style.gallery__itemFive}`}>Zobacz więcej</div>
        </div>
        <div className={style.realization__descript}>
            <h3 className={style.realization__header}>{data.frontmatter.title}</h3>
            <div className={style.realization__content} >
                <p>Naszym zadaniem było:</p>
                <ul className={style.realization__list} dangerouslySetInnerHTML={{__html: descript}}></ul>
            </div>
        </div>
    </div>
  )
}

export default Realization