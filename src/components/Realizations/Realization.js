import React, { useState } from 'react'
import Image from "gatsby-image"
import Carousel, { Modal, ModalGateway } from "react-images";

import style from './Realization.module.scss'

const Realization = ({side, data, gallery}) => {
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

  const descript = data.html;
  const {title} = data.frontmatter;
  const sortGallery = gallery
      .map(el => el.node.childImageSharp.fluid)
      .sort((x,y) => {
        let a = x.originalName.toUpperCase(),
        b = y.originalName.toUpperCase();
        return a === b ? 0 : a > b ? 1 : -1;
      });
  
  const galleryItems = sortGallery
      .filter((item, index) => index < 4)
      .map((item, index) => <div key={index} className={`${style.gallery__item} ${style["gallery__item"+(index+1)]}`} role="button" tabIndex="0" onClick={() => openLightbox(index)} onKeyDown={() => openLightbox(0)}><Image fluid={item}/></div> );
  
  /* console.log(galleryItems); */
  return(
    <>
      <div className={`${style.realization} ${style["realization"+side]}`}>
          <div className={style.gallery}>
              {galleryItems}
              <button className={`${style.gallery__item} ${style.gallery__item5}`} tabIndex="0" onClick={() => openLightbox()}>Zobacz wszystkie</button>
          </div>
          <div className={style.realization__descript}>
              <h3 className={style.realization__header}>{title}</h3>
              <div className={style.realization__content} >
                  <p>Naszym zadaniem było:</p>
                  <ul className={style.realization__list} dangerouslySetInnerHTML={{__html: descript}}></ul>
              </div>
          </div>
      </div>
      
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
    </>
  )
}

export default Realization