import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import Header from "../../components/subpageLayout/header"
import Realization from "../../components/Realizations/Realization"

const IndexPage = ({
        data: {
            allMarkdownRemark: { edges },
        },
    }) => {
    const title = "Nasze realizacje";
    const desc = (
        <>
            Do każdej realizacji podchodzimy <strong>indywidualnie</strong>, co sprawia, że każdy z samochodów traktowany jest z najwyższą dbałością, 
            tak aby różnica przed i po wywoływała <strong>efekt WOW</strong> u naszych klientów.
        </>
    );
    const Realizations = edges
        .filter(edge => !!edge.node.frontmatter.date)
        .map((edge, index) => <Realization key={edge.node.id} side={index % 2 ? 'Right' : 'Left'} data={edge.node} />)

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
            title
            image1 {
              childImageSharp {
                fluid(maxWidth: 1030, quality: 100) { 
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 260, quality: 100) { 
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 260, quality: 100) { 
                  ...GatsbyImageSharpFluid
                }
              }
            } 
            image4 {
              childImageSharp {
                fluid(maxWidth: 260, quality: 100) { 
                  ...GatsbyImageSharpFluid
                }
              }
            } 
          }
        }
      }
    }
  }
`
