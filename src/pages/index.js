import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Banner from "../components/index/MainBanner/MainBanner"
import AboutUs from "../components/index/AboutUs/AboutUs"
import Offer from "../components/index/Offer/Offer"
import Realizations from "../components/index/Realizations/Realizations"
import SocialMedia from "../components/index/SocialMedia/SocialMedia"

const IndexPage = () => {
  const aboutUsText = {
    title: "O nas",
    text: `
    <p>Wieloletnie doświadczenie, zdobyte w jednych z pierwszych firm detailingowych w Polsce, zaowocowało założeniem studio detailingu <strong>Brilliant Car</strong>.</p>
    <p>Na swoim koncie posiadamy kilkaset przeprowadzonych <strong>korekt lakierów, zabezpieczeń powłokami ceramicznymi i foliami ochronnymi</strong>. 
        Nasza praca to połączenie pasji, zaangażowania i doświadczenia, dlatego jakość naszych usług stoi na najwyższym poziomie, 
        a każdy samochód jest traktowany z najwyższą dbałością.  
    </p>
    `
  }
  const aboutUsImg = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "team.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 980, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `) 

  return (
    <Layout>
      <SEO title="Strona główna" />
      <Banner/>
      <AboutUs title={aboutUsText.title} descript={aboutUsText.text} img={aboutUsImg} />
      <Offer/>
      <Realizations/>
      <SocialMedia/>
    </Layout>
  )
}

export default IndexPage
