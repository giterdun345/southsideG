import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
// components
import Hero from '../components/landing/hero'
import Content from '../components/landing/content'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />  
    <div>
      <Content />
    </div>
    
  </Layout>
)

export default IndexPage
