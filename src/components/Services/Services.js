import React from 'react'
import Service from "./Sercive/Service"
import style from "./Services.module.scss"

const Services = ({title, data}) => {
    const bgClass = title.split(' ');
    
    const service = data.map(element => { 
    return <Service key={element.node.id} title={element.node.frontmatter.title} price={element.node.frontmatter.price} descript={element.node.html} />})
    return(
        <>
            <div className={`${style.services} ${style["services" + bgClass[0]]}`}>
                <div className="container">
                    <header>
                        <h2 className={style.services__header}>{title === "Biezaca pielegnacja" ? "Bieżąca pielęgnacja" : title}</h2>
                    </header>
                    <div className={style.services__content}>{service}</div>
                </div>
            </div>
            {title === "Pakiety" ? 
            <p className={style.services__info}>
                <span>*</span> Podane ceny są cenami orientacyjnymi, cena ostateczna jest zależna od wielkości auta i kondycji lakieru, 
                ustalana jest podczas oględzin auta. <br/>
                W przypadku powłok ceramicznych różnica kwot uwarunkowana jest od zastosowanej powłoki. <br/><br/>
                Podane ceny są cenami brutto.
            </p> 
            : null}
        </>
    )
}

export default Services