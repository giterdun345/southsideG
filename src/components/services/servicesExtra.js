import React from 'react'
// import {Link} from 'gatsby'
import ServicesCTA from './servicesCTA'
import * as svSty from './services.module.scss'

const ServicesExtra = () => {
  return ( 
    <div className={svSty.history}>
      <h3 className={svSty.servicesBlurb}>Charles Greer, the Owner, has over 20 years experience and Southside Paint + More has hundreds of happy customers.</h3>
      <h4>We have experience in many different areas:</h4>
      <div className={svSty.dosColumns} >
        <div>
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
        <div>
        <h5>Residential Services</h5>
          <ul>
            <li>Shopping Centers</li>
            <li>Strip Centers</li>
            <li>Student Housing</li>
            <li>Commercial Retail Centers</li>
            <li>Churches</li>
            <li>Schools</li>
            <li>Hotels and Motels</li>
            <li>Retail Offices</li>
            <li>Commercial Offices</li>
            <li>Malls</li>
            <li>Factories</li>
            <li>Warehouses</li>
            <li>Airplane Hangers</li>
            <li>Apartment Complexes</li>
            <li>Maitenance</li>
            <li>Senior Living Facilities</li>
            <li>Parking Garages</li>
            <li>Hospitals</li>
          </ul>
        </div>
      </div>
      
      <ServicesCTA />

    </div>
   );
}
 
export default ServicesExtra;