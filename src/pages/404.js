import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import '../assets/scss/style.scss';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <h1>Podana strona nie istnieje</h1>
      <p>Przykro nam, strona o podanym adresie nie istnieje.</p>
    </div>
  </Layout>
)

export default NotFoundPage
