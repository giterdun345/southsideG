import React from 'react'
import * as ctSty from './contact.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import {ImLocation} from 'react-icons/im'
import {TiPhoneOutline} from 'react-icons/ti'
import {MdEmail} from 'react-icons/md'

const ContactForm = () => {
  return ( 
    <div className={ctSty.contactForm}>
      <div className={ctSty.leftContainer}>
        <div className={ctSty.leftInfoContainer}>
          <StaticImage
            src="../../images/paintSwatch.jpg"
            layout='constrained'
            objectFit='cover'
            placeholder='blurred'
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="array of colors"
            height={350}
          /> 
          <div>
            <h3><ImLocation/>&nbsp; Address</h3>
            <p>2055 Derham Rd
              <br/>
               Jacksonville, Fl 32246
            </p>
          </div>
          <div>
            <h3><TiPhoneOutline />&nbsp; Give us a call</h3>
            <a href="tel:904-524-8784">904-524-8784</a>
          </div>
          <div>
            <h3><MdEmail />&nbsp; Email Us</h3>
            <a href="mailto: Sspaintnmore@outlook.com" target="_top">sspaintnmore@outlook.com</a>
          </div>
        </div>
      </div>
      <div className={ctSty.rightContainer}>
        <h2>Send Us A Message</h2>
        <form name="contact-form" 
              method="POST" 
              data-netlify="true" 
        >
          <input type="hidden" name="form-name" value="contact-form" />
            <div className={ctSty.formGroup}>
              <input name="name" type="text" placeholder="Name" required/>
            </div>
          <div className={ctSty.formGroup}>
            <input name="email" type="email" placeholder="Email" required />
          </div>
          <div className={ctSty.formGroup}>
            <input name="phone" type="tel" placeholder="Phone Number" required/>
          </div>
          <div className={ctSty.formGroup}>
            <textarea name="message" placeholder="Write your message"></textarea>
          </div>
          <button type='submit' value="Submit">Send message</button>
        </form>
      </div>
    </div>
   );
}
 
export default ContactForm;