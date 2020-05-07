import React from "react"
import Layout from "../../components/Layout/layout"
import SEO from "../../components/seo"
import Header from "../../components/subpageLayout/header"
import Realizations from "../../components/Realizations/Realizations"


const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;

  const title = "Nasze realizacje";
  const desc = (
      <>
          Do każdej realizacji podchodzimy <strong>indywidualnie</strong>, co sprawia, że każdy z samochodów traktowany jest z najwyższą dbałością, 
          tak aby różnica przed i po wywoływała <strong>efekt WOW</strong> u naszych klientów.
      </>
  )

  return(
    <Layout background={true} bgSide='right'>
      <SEO title={title} />
      <Header title={title} desc={desc} side='Left'/>
      <Realizations data={edges}/>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PortfolioListQuery {
    allMarkdownRemark( 
      filter: {fileAbsolutePath: {regex: "/realizacje/"  }}, 
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            main_img {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
