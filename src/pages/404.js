import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div style={{textAlign: "center"}}>
      <h1 style={{fontSize: '15rem'}}>404: Not Found</h1>
      <p style={{fontSize: '10rem'}}>You just hit a route that doesn&#39;t exist... what are you looking for?.</p>
    </div>
  </Layout>
)

export default NotFoundPage
