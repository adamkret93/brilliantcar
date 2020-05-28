import React from 'react'

import style from './InfoForm.module.scss'

const InfoForm = ({text, type}) => (
    <div className={`${style.infoForm} ${type === "error" ? style.infoFormDanger : style.infoFormSuccess}`}>{text}</div>
)

export default InfoForm;