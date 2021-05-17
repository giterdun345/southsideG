import React from 'react'
import * as ctSty from './contact.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'

import {ImLocation} from 'react-icons/im'
import {TiPhoneOutline} from 'react-icons/ti'
import {MdEmail} from 'react-icons/md'

const ContactForm = () => {
  return ( 
    <div className={ctSty.contactForm}>
      <div className={ctSty.leftContainer}>
        <div className={ctSty.leftInfoContainer}>
        <StaticImage
          src="../../images/paintswatch.jpg"
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
               Jacksonville, Fl 32246</p>
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
        <form name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field" 
              data-netlify-recaptcha="true"
              subject="Hey Mom you got a contact email"
              >
          <div className={ctSty.formGroup}>
            {/* <label for="name-input">Tell us your name*</label> */}
            <input name="name" id="name-input" type="text" placeholder="Name" required/>
          </div>
          <div className={ctSty.formGroup}>
            {/* <label for="email-input">Enter your email*</label> */}
            <input name="email" id="email-input" type="email" placeholder="Email" required />
          </div>
          <div className={ctSty.formGroup}>
            {/* <label for="phone-input">Enter phone number*</label> */}
            <input name="phone" id="phone-input" type="tel" placeholder="Phone Number" required/>
          </div>
          <div className={ctSty.formGroup}>
            {/* <label for="message-textarea">Message</label> */}
            <textarea name="message" id="message-textarea" placeholder="Write your message"></textarea>
          </div>
          <button>Send message</button>
          <div data-netlify-recaptcha="true"></div>
        </form>
      </div>
    </div>
   );
}
 
export default ContactForm;