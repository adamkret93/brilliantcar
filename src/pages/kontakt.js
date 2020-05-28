import React from "react"

import Layout from "../components/Layout/layout"
import Header from "../components/subpageLayout/header"
import SEO from "../components/seo"
import Contact from '../components/Contact/Contact'

const IndexPage = () => {
    const title = "Kontakt";
    const desc = (
        <>
            Jeżeli masz jakieś pytania, <strong>zadzwoń</strong> lub napisz bezpośrednio na <strong>adress e-mail</strong>, bądz poprzez <strong>formularz kontaktowy</strong> znajdujący sie poniżej.<br/> Chętnie rozwiejemy wszelkie wątpliwości.
        </>
    )

    return(
      <Layout background={true} bgSide='left'>
        <SEO title={title} />
        <Header title={title} desc={desc} side='Right'/>
        <Contact/>
      </Layout>
    )
  }

export default IndexPage
