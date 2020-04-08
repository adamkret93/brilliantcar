import React from 'react'

import style from './Offer.module.scss'

const Offer = () => {
    return (
        <section className={`${style.offer} ${style.container}`}>
            <h2 className={style.offer__header}>Co możemy dla Ciebie zrobić?</h2>
            <div className={style.offer__content}>
                <div className={`${style.offer__item} ${style.offer__itemOne}`}>
                    <div class={style.offer__carIcon}></div>
                    <div className={style.offer__itemContent}>
                        <h3 className={style.offer__itemHeader}>Ochrona lakieru</h3>
                        <p>Ut dignissim ornare est, vitae ultricies lorem maximus ac. 
                            Praesent scelerisque elit nec orci commodo pretium. 
                            Suspendisse gravida aliquam risus, vel vestibulum neque 
                            semper eu. Nulla ligula magna, sodales ut tortor in, 
                            tincidunt mollis velit.
                        </p>
                    </div>
                    <span className={style.offer__circle}></span>
                </div>
                <div className={`${style.offer__item} ${style.offer__itemTwo}`}>
                    <div class={style.offer__carIcon}></div>
                    <div className={style.offer__itemContent}>
                        <h3 className={style.offer__itemHeader}>Kosmatyka</h3>
                        <p>Ut dignissim ornare est, vitae ultricies lorem maximus ac. 
                            Praesent scelerisque elit nec orci commodo pretium. 
                            Suspendisse gravida aliquam risus, vel vestibulum neque 
                            semper eu. Nulla ligula magna, sodales ut tortor in, 
                            tincidunt mollis velit.
                        </p>
                    </div>
                    <span className={style.offer__circle}></span>
                </div>
                <div className={`${style.offer__item} ${style.offer__itemThree}`}>
                    <div class={style.offer__carIcon}></div>
                    <div className={style.offer__itemContent}>
                        <h3 className={style.offer__itemHeader}>Regeneracja</h3>
                        <p>Ut dignissim ornare est, vitae ultricies lorem maximus ac. 
                            Praesent scelerisque elit nec orci commodo pretium. 
                            Suspendisse gravida aliquam risus, vel vestibulum neque 
                            semper eu. Nulla ligula magna, sodales ut tortor in, 
                            tincidunt mollis velit.
                        </p>
                    </div>
                    <span className={style.offer__circle}></span>
                </div>
                <div className={`${style.offer__item} ${style.offer__itemFour}`}>
                    <div class={style.offer__carIcon}></div>
                    <div className={style.offer__itemContent}>
                        <h3 className={style.offer__itemHeader}>Design</h3>
                        <p>Ut dignissim ornare est, vitae ultricies lorem maximus ac. 
Praesent scelerisque elit nec orci commodo pretium. 
Suspendisse gravida aliquam risus, vel vestibulum neque 
semper eu. Nulla ligula magna, sodales ut tortor in, 
tincidunt mollis velit.</p>
                    </div>
                    <span className={style.offer__circle}></span>
                </div>
            </div>
        </section>
    )
}

export default Offer