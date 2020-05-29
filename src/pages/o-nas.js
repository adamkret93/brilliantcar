import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Header from "../components/subpageLayout/header"
import AboutUsText from "../components/index/AboutUs/AboutUs"


const AboutUs = () => {
    const title = "Nasza historia";
    const aboutUsText = `
        <p>Posiadamy wieloletnie doświadczenie, które zdobyliśmy w jednych z pierwszych firm detailingowych w Polsce: Diamentowej Ochronie Lakieru i Głowacki autoSPA. Na swoim koncie posiadamy kilkaset przeprowadzonych korekt lakierów, zabezpieczeń powłokami ceramicznymi i foliami ochronnymi, które zaowocowały założeniem studia detailingowego <strong>Brilliant Car.</strong></p>
        <p>
            W swojej ofercie posiadamy usługi z zakresu zabezpieczenia pojazdów <strong>powłokami ochronnymi</strong> oraz <strong>bezbarwnymi foliami</strong>, <strong>renowacji lakierów</strong> i <strong>ogólnej kosmetyki wnętrz pojazdów</strong>.
            Nasza praca to połączenie pasji, zaangażowania i doświadczenia, dlatego jakość naszych usług stoi na najwyższym poziomie, 
            a każdy samochód jest traktowany z najwyższą dbałością.  
        </p>
        <p>Pozdrawiamy, <br/>Arkadiusz Widła i Michał Partyka</p>
    `;
    
    const aboutUsImg = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "renowacja.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 980) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return(
      <Layout background={true} bgSide='left'>
        <SEO title={title} />
        <Header title={title} side='Right'/>
        <AboutUsText title={title} descript={aboutUsText} img={aboutUsImg}/>
      </Layout>
    )
}

export default AboutUs
