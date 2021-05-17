import React from 'react'
// import {Link} from 'gatsby'
// import {StaticImage} from 'gatsby-plugin-image'
import ServicesCTA from './servicesCTA'
import * as svSty from './services.module.scss'

const ServicesExtra = () => {
  return ( 
    <div>
      <div className={svSty.servicesBlurb}>
        <h3>Where Experience is a Must.</h3>
        <p>Our consistent high standards of thorough preparation in all of our projects lead to a high quality and long lasting finish every time. Although quality is our focus, we also strive to offer competitive rates. We may not offer the lowest prices but we believe we offer the best value – we do not cut corners or compromise our high standards of workmanship and because we conduct a full site inspection and specification before we begin a project, our quotes are accurate and the costs won’t increase after the work begins.</p>
      </div>
      <div style={{marginTop:'4rem'}} >
        <div>
          <h4 className={svSty.colTitle} >We have a breadth experience</h4>
          <div className={svSty.dosColumns} >
            <div className={svSty.unColumn}>
            <h5>Residential Services</h5>
              <ul>
                <li>Single Family</li>
                <li>Town Homes</li>
                <li>Lofts</li>
                <li>Condos</li>
                <li>Apartments</li>
                <li>Stucco</li>
                <li>Garage Floors</li>
                <li>HOA's</li>
                <li>Home Developments</li>
              </ul>
            </div>
            <div className={svSty.unColumn}>
              <h5>Commercial Services</h5>
                <ul>
                <li>Shopping Centers</li>
                {/* <li>Strip Centers</li> */}
                <li>Student Housing</li>
                {/* <li>Commercial Retail Centers</li> */}
                <li>Churches</li>
                <li>Schools</li>
                <li>Hotels and Motels</li>
                {/* <li>Retail Offices</li> */}
                <li>Commercial Offices</li>
                <li>Malls and Strip Centers</li>
                <li>Factories & Warehouses</li>
                <li>Airplane Hangers</li>
                <li>Apartment Complexes</li>
                {/* <li>Maitenance</li> */}
                <li>Senior Living Facilities</li>
                <li>Parking Garages</li>
                <li>Hospitals</li>
              </ul>
            </div> 
          </div>
        </div>
      </div>
      <ServicesCTA />
    </div>
   );
}
 
export default ServicesExtra;