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
                <p><strong>Powłoki ceramiczne</strong> są formą chemicznego zabezpieczenia lakieru. Dotyczy przede wszystkim zabezpieczenia przed starzeniem się lakieru i jego zużywaniem (matowieniem) od promieni UV, przy okazji ułatwia bieżącą pielęgnację, nadając lakierowi hydrofobowość. Dodatkowo podkreśla kolor, jego szklistość oraz podbija jego ziarno. Owszem powłoka chroni lakier od mikrozarysowań, ale trzeba pamiętać że każde zabezpieczenie ma swoje limity.</p>
                <p>Powłoka jest to płyn krystalizujący się na lakierze, po utwardzeniu tworząc warstwę izolującą od czynników zewnętrznych, takich jak agresywna chemia, promieniowanie UV, ptasie odchody.  Poza karoserią pojazdu ta forma ochrony zabezpiecza również felgi aluminiowe, szyby czy elementy z tworzyw sztucznych.</p>
                <p>Będąc certyfikowanym partnerem marki <strong>FX PROTECT</strong>, oferujemy zabezpieczenie samochodów szeregiem <strong>powłok ochronnych</strong>, od najprostszych - 12 miesięcznych powłok hydrofobowych po zaawansowane powłoki o różnej twardości i wytrzymałości nawet do 5 LAT.</p>
                <p>Dodatkowo możemy zabezpieczyć pojazd <strong>FOLIĄ OCHRONNĄ</strong>, która obecnie jest najlepszą formą ochrony lakieru samochodu od uszkodzeń mechanicznych, odprysków kamieni czy wypiaskowaniem. Folię możemy aplikować na dowolny lakierowany element czy reflektor.</p>
                <p>Każde zabezpieczone auto certyfikowanymi powłokami czy folią ochronną, otrzymuje certyfikat autentyczności będący gwarancją.</p>
                <p>* Cena powłoki w pakiecie (Lakier + Felgi + Szyby + podstawowa kosmetyka wnętrza)</p>
            </div>
        </>
    );
    const foil = (
        <div className={style.services__description} >
            <p><strong>Folie ochronne PPF</strong> są najbardziej trwałym zabezpieczeniem lakieru samochodowego jakie istnieją na rynku. Są to zaawansowane technologicznie rozwiązania, które zapewniają pełną ochronę lakieru od uszkodzeń mechanicznych np. odprysków spowodowanych uderzeniem kamienia czy przed wypiaskowaniem. 
                Chronią lakier przed czynnikami atmosferycznymi, nadają zabezpieczonym elementom niesamowitą hydrofobowość.
            </p>
            <p>Można je zastosować do ochrony bardziej delikatnych i podatnych na uszkodzenia części nadwozia, takich jak np. przednie reflektory. Ogromną zaletą bezbarwnnych folii ochronnych są zdolności do samoregeneracji. Pod wpływem ciepła (promieni słonecznych lub po umyciu samochodu ciepłą wodą) drobne zarysowania zabliźniają się. 
            Folie ochronne są transparentne, nie zmieniają koloru ani odcienia danego lakieru. Można nimi zabezpieczyć dowolnie wybrane elementy lakierowane nadwozia oraz reflektory lub całość auta. Dotyczy to również lakierów matowych.
            </p>
        </div>
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
                    {(title === "Zabezpieczenie lakieru - powloki ochronne") ? shell
                        : (title === "Bezbarwne folie ochronne") ? foil 
                        : null 
                    }
                </header>
                <div className={style.services__content}>{service}</div>
                <p>Podane ceny usług są cenami brutto.</p>
            </div>
        </div>
    )
}

export default Services