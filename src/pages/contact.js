import React from 'react'
import Seo from "../components/layout/seo"


import Layout from "../components/layout/layout"
import ContactForm from '../components/contact/contactForm'
import * as ctSty from '../components/contact/contact.module.scss'


const Contact = () => {
  return ( 
    <Layout>
      <Seo title="Contact" />
      <h1 className={ctSty.intro}>Contact us for a free consultation</h1>
    
    <ContactForm/>
    </Layout>
   );
}
 
export default Contact;