import React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout/layout"
import ServicesList from '../components/services/servicesList'
import ServicesExtra from '../components/services/servicesExtra'
import * as svSty from '../components/services/services.module.scss'

const Services = () => {
  return ( 
    <Layout>
      <div style={{display: 'grid'}} >
        <StaticImage
          src="../images/workmanshipImg.jpg"
          layout='fullWidth'

          placeholder='blurred'
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="freshly painted and clean"
          style={{gridArea:'1/1'}}

        />
        <div className={svSty.heroOverlay}>
          <div className={svSty.titleWrapper}>
            <h2 className={svSty.overlayTitle}>Commercial & Residential Services</h2>
              <div className={svSty.ctaButtons}>
                <Link to='/contact' ><button>Free Estimate</button></Link>
                <a href='tel:904-524-8784'><button>Call Now</button></a>
              </div>
          </div>
        </div>
      </div>
      <div>
       <ServicesList /> 
      </div>
      <ServicesExtra />
    </Layout>
   );
}
 
export default Services;