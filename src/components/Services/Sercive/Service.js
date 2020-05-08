import React, {useState} from 'react'
import style from "./Service.module.scss"

const Service = ({title, price, descript}) => {

    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openModalbox = () => setViewerIsOpen(true);
  
    const closeModalbox = () => setViewerIsOpen(false);
    return(
        <>
            <div className={style.service} role="button" tabIndex="0" onClick={() => openModalbox()} onKeyDown={() => openModalbox(0)}>
                {title}
            </div>

            
            <Modal onClose={closeModalbox}>
                <h3>{title}</h3>
                {descript}
                <p>price:{price}</p>
            </Modal>
        </>
    )
}

export default Service