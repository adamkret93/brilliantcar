import React from 'react'
import { Modal, ModalGateway } from "react-images";
import style from "./Service.module.scss"

const Service = ({title, price, descript}) => {
    return(
        <div className={style.service}>
            {title}
        </div>
    )
}

export default Service