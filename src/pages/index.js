import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Banner from "../components/index/MainBanner/MainBanner"
import AboutUs from "../components/index/AboutUs/AboutUs"
import Offer from "../components/index/Offer/Offer"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona główna" />
    <Banner/>
    <AboutUs/>
    <Offer/>
  </Layout>
)

export default IndexPage
