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
            {title === "Basic" ? <h4 className={style.pakietType}>Samochody fabrycznie nowe:</h4> : (title === "Full" ? <h4 className={style.pakietType}>Samochody używane:</h4> :null) }
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
                className="modal"
                overlayClassName="overlay"
            >
                <button className="closeModal" onClick={closeModal} title="Close (ESC)"></button>
                <h3 className={style.modal__title} dangerouslySetInnerHTML={{__html: title}}></h3>
                <div dangerouslySetInnerHTML={{__html: descript}} className={style.modal__description}></div>
                <p className={style.modal__price}>Cena: {price}</p>
            </Modal>
        </>
    )
}

export default Service