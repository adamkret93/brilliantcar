import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import Header from "../../components/subpageLayout/header"
import Realization from "../../components/Realizations/Realization"

const IndexPage = ({ data }) => {
    const edges = data.allMarkdownRemark.edges;
    const gallery = data.allFile.edges;

    const title = "Nasze realizacje";
    const desc = (
        <>
            Do każdej realizacji podchodzimy <strong>indywidualnie</strong>, co sprawia, że każdy z samochodów traktowany jest z najwyższą dbałością, 
            tak aby różnica przed i po wywoływała <strong>efekt WOW</strong> u naszych klientów.
        </>
    );
    const Realizations = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map((edge, index) => <Realization key={edge.node.id} side={index % 2 ? 'Right' : 'Left'} data={edge.node} gallery={gallery.filter(el => el.node.relativeDirectory === edge.node.frontmatter.name)} />)

    return(
        <Layout background={true} bgSide='right'>
          <SEO title={title} />
          <Header title={title} desc={desc} side='Left'/>
          {Realizations}
        </Layout>  
    )
}

export default IndexPage

export const pageQuery = graphql`
  query PortfolioListQuery {
    allMarkdownRemark( 
      filter: {fileAbsolutePath: {regex: "/(realizacje)/"  }}, 
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 600)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            name
            title
          }
        }
      }
    },
    allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"}, absolutePath: {regex: "/(realizacje)/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) { 
              ...GatsbyImageSharpFluid
              originalName
            }
          }
          relativeDirectory
        }
      }
    }
  }
`
