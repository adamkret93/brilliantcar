import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Banner from "../components/index/MainBanner/MainBanner"
import AboutUs from "../components/index/AboutUs/AboutUs"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona główna" />
    <Banner/>
    <AboutUs/>
  </Layout>
)

export default IndexPage
