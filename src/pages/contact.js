import React from 'react'
import Seo from "../components/layout/seo"
import { StaticImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'

import Layout from "../components/layout/layout"

const Contact = () => {
  return ( 
    <Layout>
      <Seo title="Contact" />
    <div>
      ContactPage
    </div>
    </Layout>
   );
}
 
export default Contact;