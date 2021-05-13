import React from 'react'
import Logo from '../header/logo'
import { Link } from 'gatsby'

import * as ftSty from './footer.module.scss'
import { FaCopyright } from 'react-icons/fa';


 const FooterLogo = () => {
   return (
    <div className={`${ftSty.logoPosition}`}>
    <Logo />
    <section className={`${ftSty.logoBottomSection}`}>
      <section className={ftSty.logoBottomWrapper}>   
        <FaCopyright /> 2021 SSP+M &nbsp;    
        <address className={ftSty.logoAddress} role="company address">
          2055 Derham Rd
          Jacksonville, Fl 32246
        </address>
        <br/>
        <span className={ftSty.logoBottomRights}> - All Rights Reserved - </span>
      </section>
      <div className={ftSty.logoBottomWrapper}>
        <Link to="/terms-of-use" className={ftSty.genericAnchor} rel="nofollow">Terms</Link> | <Link to="/privacy-policy" className={ftSty.genericAnchor} rel="nofollow">Privacy</Link>
      </div>
    </section>
  </div>
   );
 }
  
 export default FooterLogo;