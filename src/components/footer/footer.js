import React from 'react';
import { Link } from 'gatsby'
import * as ftSty from './footer.module.scss'
//components
import FooterLogo from './footerlogo'
import FooterAbout from './footerAbout'
import FooterContact from './footerContact'
import FooterConnect from './footerConnect'

const Footer = () => {
  return ( 
    <footer>
      <FooterLogo />
        {/* ABOUT  */}
      <FooterAbout />
      <FooterContact />
      <FooterConnect />
  </footer>
)}
 
export default Footer;