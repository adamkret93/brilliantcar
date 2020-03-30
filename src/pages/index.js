import React from "react"
/* import { Link } from "gatsby" */
import Form from "../components/contactForm"

import Layout from "../components/Layout/layout"
import Image from "../components/image"
import Banner from "../components/MainBanner/MainBanner"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Strona główna" />
    <Banner/>
    <div className="container">
      <h1>Website under construction ;) </h1>
      <Form/>
      <Image/>
    </div>
  </Layout>
)

export default IndexPage
