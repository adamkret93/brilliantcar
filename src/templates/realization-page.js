import React, { useState } from 'react'
import Carousel, { Modal, ModalGateway } from "react-images";
import Image from "gatsby-image"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import style from './realization-page.module.scss'

export default ({ data }) => {
    const edges = data.markdownRemark;
    const gallery = data.allFile.edges;

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = (index=0) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    };
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
    
    const descript = edges.html;
    const {name, title} = edges.frontmatter;

    const sortGallery = gallery
        .filter(el => el.node.relativeDirectory.split('/')[2] === name)
        .map(el => el.node.childImageSharp.fluid)
        .sort((x,y) => {
          let a = x.originalName.toUpperCase(),
          b = y.originalName.toUpperCase();
          return a === b ? 0 : a > b ? 1 : -1;
        });
    
    const galleryItems = sortGallery
        .filter((_, index) => index < 4)
        .map((item, index) => <div key={index} className={`${style.gallery__item} ${style["gallery__item"+(index+1)]}`} role="button" tabIndex="0" onClick={() => openLightbox(index)} onKeyDown={() => openLightbox(0)}><Image fluid={item}/></div> );
    
    return(
        <Layout background={true} bgSide='right'>
            <SEO title={title} />
                <header className={style.header}>
                    <h1 className={style.header__title}>{title}</h1>
                </header>
                <button onClick={() => window.history.back(-1)} className={style.backLink}>Powrót do realizacji</button>
                <div className={`${style.realization}`}>
                    <div className={style.gallery}>
                        {galleryItems}
                        {galleryItems.length > 1 ? <button className={`${style.gallery__item} ${style.gallery__item5}`} tabIndex="0" onClick={() => openLightbox()}>Zobacz wszystkie</button> : null }
                    </div>
                    <div className={style.realization__descript}>
                        <h3 className={style.realization__header}>{title}</h3>
                        <div className={style.realization__content} dangerouslySetInnerHTML={{__html: descript}}></div>
                    </div>
                </div>
                <div style={{clear: "both"}}></div>
            

            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={sortGallery.map(x => ({
                        src: x.src,
                        caption: title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </Layout>
    )
}

export const query = graphql`
  query RealizationQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        excerpt
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            name
            title
        }
    },
    allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"}, absolutePath: {regex: "/(realizacje)/"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) { 
                ...GatsbyImageSharpFluid
                originalName
              }
            }
            relativeDirectory
          }
        }
      }
  }
`