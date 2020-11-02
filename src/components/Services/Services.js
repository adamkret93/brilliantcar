import React from 'react'
import Service from "./Sercive/Service"
import style from "./Services.module.scss"

const Services = ({title, data}) => {
    const bgClass = title.split(' ');
    
    const service = data.map(element => { 
    return <Service key={element.node.id} title={element.node.frontmatter.title} price={element.node.frontmatter.price} descript={element.node.html} />});

    const shell = (
        <>
            <div className={style.services__description} >
                <p>Będąc certyfikowanym partnerem marki <strong>FX PROTECT</strong>, oferujemy zabezpieczenie samochodów szeregiem <strong>powłok ochronnych</strong>, od najprostszych - 12 miesięcznych powłok hydrofobowych po zaawansowane powłoki o różnej twardości i wytrzymałości nawet do 5 LAT.</p>
                <p>Dodatkowo możemy zabezpieczyć pojazd <strong>FOLIĄ OCHRONNĄ</strong>, która obecnie jest najlepszą formą ochrony lakieru samochodu od uszkodzeń mechanicznych, odprysków kamieni czy wypiaskowaniem. Folię możemy aplikować na dowolny lakierowany element czy reflektor.</p>
                <p>Każde zabezpieczone auto certyfikowanymi powłokami czy folią ochronną, otrzymuje certyfikat autentyczności będący gwarancją.</p>
            </div>
        </>
    )
    return(
        <div className={`${style.services} ${style["services" + bgClass[0]]}`}>
            <div className="container">
                <header className={style.services__header}>
                    <h2 >
                        {(title === "Biezaca pielegnacja") ? "Bieżąca pielęgnacja" :
                            (title === "Kosmetyka wnetrza") ? "Kosmetyka wnętrza" : 
                            (title === "Zabezpieczenie lakieru - powloki ochronne") ? "Zabezpieczenie lakieru - powłoki ochronne" : title}
                    </h2>
                    {title === "Zabezpieczenie lakieru - powloki ochronne" ? shell : null }
                </header>
                <div className={style.services__content}>{service}</div>
            </div>
        </div>
    )
}

export default Services