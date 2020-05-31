import React, {useState} from "react"

import style from "./Contact.module.scss"
import Location from '../../assets/images/location.svg'
import Tel from '../../assets/images/tel.svg'
import Email from '../../assets/images/email.svg'
import Spinner from '../../components/Layout/Spinner/Spinner'
import InfoForm from './InfoForm/InfoForm'

const validate = form => {
  if(!form.email) {
    return "Adres e-mail jest wymagany."
  } else if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(form.email)) {
    return "Adres e-mail jest nie poprawny."
  }

  if(!form.message) {
    return "Treść wiadomości jest wymagana."
  } else if (form.message.length < 5 ){
    return "Wiadomość jest za krótka."
  }

  if(!form.agree){
    return "Zgoda na przetwarzanie danych jest wymagana."
  }

  return null
}

const Contact = () => {
  const [info, setInfo] = useState({
    text: null,
    type: null
  });
  const [loading, setLoading] = useState(false); 
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    agree: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setMessageSent(true);
    setLoading(true);
    const errorMsg = validate(formData);
    if (errorMsg) {
      setLoading(false);
      setInfo({
        text: errorMsg,
        type: "error"
      });
      return
    }

    try {
      let payload = {
        email: formData.email,
        message: formData.message
      }

      const response = await fetch('/contactForm.php', {
        method: "POST",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, *same-origin, omit
        headers: { "Content-Type": "application/json" },
        redirect: "follow", // manual, *folslow, error
        referrer: "client", // no-referrer, *client
        body: JSON.stringify(payload),
      })

      const answer = await response.json();
      console.log(answer);
      if (answer.success) {
        setLoading(false);
        setInfo({
          text: "Dziękujemy! Wiadomość została wysłana.",
          type: "success"
        });
      } else {
        setLoading(false);
        setInfo({
          text: "Błąd połączenia. Spróbuj ponownie.",
          type: "error"
        });
      }
    } catch (err) {
      setLoading(false);
      setInfo({
        text: "Błąd połączenia. Spróbuj ponownie.",
        type: "error"
      });
    }
  }

  const updateField = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeAgree = () => {
    setFormData((prevState) => ({
      ...formData,
      agree: !prevState.agree
    }));
  }

  let form = (
    <form onSubmit={handleSubmit}>
        <label className={`${style.form__label} ${style.form__labelEmail}`}>
          Podaj adres e-mail:<span>*</span>
          <input placeholder='Adres e-mail' name='email' aria-label="email" type="email" value={formData.email} onChange={updateField} />
        </label>
        <label className={style.form__label}>
          Treść wiadomości:
          <textarea placeholder='Treść wiadomości' name='message' aria-label="message" value={formData.message} onChange={updateField} />
        </label>
        <label className={`${style.form__label} ${style.form__labelAgree}`}><input type="checkbox" name='agree' aria-label="agree" checked={formData.agree} onChange={handleChangeAgree}/>Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w Formularzu kontaktowym. Administratorem danych jest
          Brilliant Car Studio Detailingu Arkadiusz Widła, Michał Partyka s.c., ul. Jurajska 20, 32-085 Modlnica. Podane dane będa przetworzone w celu udzielenia odpowiedzi na przesłane zapytanie.</label>
        <button type='submit' className={style.form__submit}>Wyślij</button>
    </form>
  );

  if(loading) {
    form = <Spinner/>;
  }

  return (
    <>
        <div className={`${style.contact} container`}>
            <div className={style.contact__info}>
                <p className={style.contact__name}>Brilliant Car - Studio Detailingu</p>
                <p className={style.contact__adress}>
                    <img className={style.contact__img} src={Location} alt="location" />
                    ul. Jurajska 20, <br/>
                    32-085 Modlnica
                </p>
                <a className={style.contact__tel} href="tel:+48 721 000 010">
                    <img className={style.contact__img} src={Tel} alt="telphone" />
                    +48 721 000 010
                </a>
                <a className={style.contact__email} href="mailto:brilliantcarstudio@gmail.com">
                    <img className={style.contact__img} src={Email} alt="e-mail"/>
                    brilliantcarstudio@gmail.com
                </a>
            </div>
            <div className={style.contact__form}>
                <h3 className={style.form__title}>Formularz kontaktowy</h3>
                {info.text ? <div> <InfoForm text={info.text} type={info.type}/> </div> : null} 
                {form}            
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.8325557498247!2d19.87129111571971!3d50.12685517943206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
        1!3m3!1m2!1s0x471659a3653c3795%3A0xeffcff508d9351f3!2sBrilliant%20Car%20Studio%20Detailingu!5e0!3m2!1spl!2spl!4v1589983455108!5m2!1spl!2spl" width="1920" height="600" 
        title="companyLocation" frameBorder="0" style={{border: 0, maxWidth: "100%"}} allowFullScreen="" aria-hidden="false"></iframe>
    </>
  )
}

export default Contact;