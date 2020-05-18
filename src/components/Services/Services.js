import React from 'react'
import Service from "./Sercive/Service"
import style from "./Services.module.scss"

const Services = ({title, data}) => {
    const bgClass = title.split(' ');
    console.log(data);
    const service = data.map(element => { 
    return <Service key={element.node.id} title={element.node.frontmatter.title} price={element.node.frontmatter.price} descript={element.node.html} />})
    return(
        <div className={`${style.services} ${style["services" + bgClass[0]]}`}>
            <div className="container">
                <header>
                    <h2 className={style.services__header}>{title === "Biezaca pielegnacja" ? "Bieżąca pielęgnacja" : title}</h2>
                </header>
                <div className={style.services__content}>{service}</div>
            </div>
        </div>
    )
}

export default Services