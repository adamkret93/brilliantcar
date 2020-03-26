import React, {Component} from 'react'
//import Img from "gatsby-image"
import style from "./MainBanner.module.scss"

class mainBanner extends Component {
    state = {
        counter: 0
    }

    componentDidMount () {
        setInterval( () => {
            //console.log(this.state.counter);
            this.changeImgHandler()
        },
        5000);
    }

    changeImgHandler = () => {
        if(this.state.counter >= 4){
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
               <h1>Count: {this.state.counter}</h1>
            </section>
        )
    }
    
}

export default mainBanner