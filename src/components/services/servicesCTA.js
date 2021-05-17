import React from 'react'
import * as svSty from './services.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'

import {RiMailSendLine} from 'react-icons/ri'
import {FiPhoneCall} from 'react-icons/fi'

const ServicesCTA = () => {
  return ( 
    <div className={svSty.servicesCta}>
      <div className={svSty.ctaContact}>
        <div>
        <h3>Contact Us</h3>
          <p>
            Get in touch with us using the buttons below and we can set up an appointment for a free consultation.
          </p>
        </div>
        <div className={svSty.ctaContactButtons}>
        <a href='tel:904-524-8784' ><button style={{display:'flex', alignItems:'center'}}><FiPhoneCall/>&nbsp; Call Us at 904-555-5555</button></a>
         <br/>
        <Link to='/contact' ><button style={{display:'flex', alignContent:'center'}}><RiMailSendLine/>&nbsp; Send a message</button></Link>
        </div>
       
      </div>
        <StaticImage
          src="../../images/workB.jpg"
          layout='constrained'
          placeholder='blurred'
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="swoosh of paint"
          width={640}
        />
    </div>
    
   
   );

}
 
export default ServicesCTA;