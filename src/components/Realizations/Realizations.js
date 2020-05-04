import React from 'react'

import { Link } from "gatsby"
import Img from "gatsby-image"
import style from './Realizations.module.scss'

const Realization = ({data}) => {

  const Realizations = data
    .filter(({ node }) => !!node.frontmatter.date)
    .map(({ node }) => (
      <div key={node.id} className={style.realization__item}>
        <Link to={node.fields.slug} >
          <Img fluid={node.frontmatter.main_img.childImageSharp.fluid} />
          <h4 className={style.item__title}>{node.frontmatter.title}</h4>
        </Link>
      </div> 
    ))

    return(
      <div className={style.realizations__wrapper}>
        {Realizations}
      </div>
    )
}

export default Realization