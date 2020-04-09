import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image'

import style from './Realizations.module.scss'

const Realizations = () => {
    const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "audi_inside.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 955, quality: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "audi-fela.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 755, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "bmw7_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1145) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "bmw_siedzenie_v2.jpg" }) { 
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <section className={style.realizations}>
            <div className={style.realizations__header}>
                <h2>Nasze realizacje</h2>
            </div>
                <p>Zobacz wszystkie</p>
            <div className={style.realizations__itemOne}>
                <Image fluid={data.image1.childImageSharp.fluid} />
            </div>
            <div className={style.realizations__itemTwo}>
                <Image fluid={data.image2.childImageSharp.fluid} />
            </div>
            <div className={style.realizations__itemThree}>
                <Image fluid={data.image3.childImageSharp.fluid} />
            </div>
            <div className={style.realizations__itemFour}>
                <Image fluid={data.image4.childImageSharp.fluid} />
            </div>
        </section>
    )
}

export default Realizations