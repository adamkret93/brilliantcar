import React, {useState, useEffect} from 'react'

import style from "./MainBanner.module.scss"
import LogoBig from '../../../assets/images/logo-big.png'
import fxprotect from '../../../assets/images/fxprotect.jpg'

import IMG1_1 from "../../../assets/images/banner/1/1.jpg"
import IMG1_2 from "../../../assets/images/banner/1/2.jpg"
import IMG1_3 from "../../../assets/images/banner/1/3.jpg"
import IMG2_1 from "../../../assets/images/banner/2/1.jpg"
import IMG2_2 from "../../../assets/images/banner/2/2.jpg"
import IMG2_3 from "../../../assets/images/banner/2/3.jpg"
import IMG3_1 from "../../../assets/images/banner/3/1.jpg"
import IMG3_2 from "../../../assets/images/banner/3/2.jpg"
import IMG3_3 from "../../../assets/images/banner/3/3.jpg"
import IMG4_1 from "../../../assets/images/banner/4/1.jpg"
import IMG4_2 from "../../../assets/images/banner/4/2.jpg"
import IMG4_3 from "../../../assets/images/banner/4/3.jpg"

const MainBanner = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(counter >= 2){
                setCounter(0);
            } else {
                setCounter(counter => counter + 1);
            } 
        }, 10000);

        return () => clearInterval(interval);
      }, [counter]);
    
    const image1 = [IMG1_1, IMG1_2, IMG1_3]; //690 x 400
    const image2 = [IMG2_1, IMG2_2, IMG2_3]; //690 x 400
    const image3 = [IMG3_1, IMG3_2, IMG3_3]; // 575 x 480
    const image4 = [IMG4_1, IMG4_2, IMG4_3]; // 575 x 400 

    return(
        <section className={style.banner}>
            <div className={style.banner__logoWrapper}>
                <img className={style.banner__logo} src={LogoBig} alt="Brilliant Car Studio Detailingu"/>
                <div className={style.banner__motto}>
                    <p className={`${style.banner__mottoItem} ${style.banner__mottoItemFirst}`}>Certyfikowany</p><p className={`${style.banner__mottoItem} ${style.banner__mottoItemSecond}`}>partner</p>
                    <a href="https://fxprotect.com/" rel="nofollow"><img src={fxprotect} alt="FxProtect"/></a>
                </div>
            </div>
            <div className={style.banner__bannerItems}>
                <figure className={`${style.banner__bannerItem} ${style.banner__bannerItemOne}`} style={{backgroundImage: 'url('+image1[counter]+')'}}></figure>
                <figure className={`${style.banner__bannerItem} ${style.banner__bannerItemTwo}`} style={{backgroundImage: 'url('+image2[counter]+')'}}></figure>
                <figure className={`${style.banner__bannerItem} ${style.banner__bannerItemThree}`} style={{backgroundImage: 'url('+image3[counter]+')'}}></figure>
                <figure className={`${style.banner__bannerItem} ${style.banner__bannerItemFour}`} style={{backgroundImage: 'url('+image4[counter]+')'}}></figure>
            </div>
        </section>
    )
}

export default MainBanner