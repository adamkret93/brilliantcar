import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from './AboutUs.module.scss'

const AboutUs = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "hand.png" }) {
          childImageSharp {
            fluid(maxWidth: 980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)
    return(
        <section className={`${style.aboutUs} ${style.container}`}>
            <Img className={style.aboutUs__image} fluid={data.placeholderImage.childImageSharp.fluid} alt="O nas"/>
            <div className={style.aboutUs__box}>
                <h2 className={style.aboutUs__header}>O nas</h2>
                <p className={style.aboutUs__content}>Wieloletnie doświadczenie, zdobyte w jednych z pierwszych firm detailingowych w Polsce, zaowocowało założeniem studio detailingu <strong>Brilliant Car</strong>.</p>
                <p className={style.aboutUs__content}>Na swoim koncie posiadamy kilkaset przeprowadzonych <strong>korekt lakierów, zabezpieczeń powłokami ceramicznymi i foliami ochronnymi</strong>. 
                    Nasza praca to połączenie pasji, zaangażowania i doświadczenia, dlatego jakość naszych usług stoi na najwyższym poziomie, 
                    a każdy samochód jest traktowany z najwyższą dbałością.  
                </p>
            </div>
        </section>
    )
}

export default AboutUs