import React, {Component} from 'react'
//import Img from "gatsby-image"
import style from "./MainBanner.module.scss"
import LogoBig from '../../assets/images/logo-big.png'
import IMG1 from "../../assets/images/bmw7.jpg"
import IMG2 from "../../assets/images/bmw7_3.jpg"

class mainBanner extends Component {
    state = {
        image1: [IMG1, IMG2], //345 x 320
        image2: [IMG1, IMG2], //690 x 400
        image3: [IMG1, IMG2], // 575 x 480
        image4: [IMG1, IMG2], // 575 x 400
        counter: 0
    }

    componentDidMount () {
        this.myInterval = setInterval( () => {
            this.changeImgHandler() 
        },
        10000);
    }
    componentWillUnmount () {
        clearInterval(this.myInterval);
    }

    changeImgHandler = () => {
        if(this.state.counter >= 1){
            this.setState({counter: 0});
            return 0;
        }

        this.setState( prevState => ({
            counter: prevState.counter +1
        }));
    }

    render(){
        return(
            <section className={style.banner}>
               <div className={style.banner__logoWrapper}>
                    <img className={style.banner__logo} src={LogoBig} alt="Brilliant Car Studio Detailingu"/>
                    <div className={style.banner__motto}>
                        <p className={`${style.banner__mottoItem} ${style.banner__mottoItemFirst}`}>Dbamy</p><p className={`${style.banner__mottoItem} ${style.banner__mottoItemSecond}`}>o detale</p>
                    </div>
               </div>
               <div className={style.banner__bannerItems}>
                    <figure className={`${style.banner__bannerItem} ${style.banner__bannerItemOne}`} style={{backgroundImage: 'url('+this.state.image1[this.state.counter]+')'}}></figure>
                    <figure className={`${style.banner__bannerItem} ${style.banner__bannerItemTwo}`} style={{backgroundImage: 'url('+this.state.image2[this.state.counter]+')'}}></figure>
                    <figure className={`${style.banner__bannerItem} ${style.banner__bannerItemThree}`} style={{backgroundImage: 'url('+this.state.image3[this.state.counter]+')'}}></figure>
                    <figure className={`${style.banner__bannerItem} ${style.banner__bannerItemFour}`} style={{backgroundImage: 'url('+this.state.image4[this.state.counter]+')'}}></figure>
               </div>
            </section>
        )
    }
    
}

export default mainBanner