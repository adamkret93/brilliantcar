import React from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import Header from "../../components/subpageLayout/header"
import Services from "../../components/Services/Services"


const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;
  const title = "Nasze usługi";
  const desc = (
      <>
          W swojej ofercie posiadamy wachlarz usług, począwszy od <strong>detailingu zewnętrznego</strong>, przez <strong>detailing kompletny, aplikację wosku, 
          powłoki ceramicznej</strong> aż po <strong>aplikację folii ochronnej</strong>.  
      </>
  )

  let services = {
    'Biezaca pielegnacja': [],
    'Renowacja i ochrona lakieru': [],
    'Pakiety': []
  }
  edges.forEach(element => services[element.node.frontmatter.section] ? services[element.node.frontmatter.section].push(element): null);
  
  const servicesComponents = Object.keys(services)
    .map(element => <Services title={element} data={services[element]} /> )

  return(
    <Layout background={true} bgSide='left'>
      <SEO title={title} />
      <Header title={title} desc={desc} side='Right'/>
      {servicesComponents}
    </Layout>
  )
}

export default IndexPage


export const pageQuery = graphql`
query {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/uslugi/"}}) {
    edges {
      node {
        id
        frontmatter {
          section
          title
          price
        }
        html
      }
    }
  }
}
`