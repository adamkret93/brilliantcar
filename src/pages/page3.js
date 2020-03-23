import React, { Component } from 'react'

import Layout from '../components/Layout/layout'
import SEO from "../components/seo"




class Page3 extends Component {

    render() {
        
        return(
            <Layout>
                <SEO title="Kontakt" />
                <p>This is third page.</p>
                
            </Layout>
        );
    }
}

export default Page3