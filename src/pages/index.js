import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Banner from "../components/index/MainBanner/MainBanner"
import AboutUs from "../components/index/AboutUs/AboutUs"
import Offer from "../components/index/Offer/Offer"
import Realizations from "../components/index/Realizations/Realizations"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona główna" />
    <Banner/>
    <AboutUs/>
    <Offer/>
    <Realizations/>
  </Layout>
)

export default IndexPage
