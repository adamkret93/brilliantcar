import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';
import style from "./Service.module.scss"

Modal.setAppElement(`#___gatsby`);

const Service = ({title, price, descript}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        modalIsOpen ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
    }); 
  
    const openModal = () => setModalIsOpen(true);
    const enterPress = (event) => event.key === 'Enter' ? setModalIsOpen(true) : null;
    const closeModal = () => setModalIsOpen(false);
    return(
        <>
            <div className={style.service} role="button" tabIndex="0" onClick={openModal} onKeyDown={enterPress}>
                <h3 className={style.service__title} dangerouslySetInnerHTML={{__html: title}}></h3>
                <div className={style.service__price}>
                    <div className={style.price__top}></div>
                    <div className={style.price__center}>{price}</div>
                    <div className={style.price__bottom}></div>
                </div>
            </div>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Szczegóły usługi"
                className="Modal"
                overlayClassName="Overlay"
            >
                <button className="closeModal" onClick={closeModal} title="Close (ESC)">X</button>
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{__html: descript}}></div>
                <p>price:{price}</p>
            </Modal>
        </>
    )
}

export default Service