import React from 'react'
import { Link } from 'gatsby'

import * as ftSty from './footer.module.scss'


const FooterContact = () => {
  return ( 
    <div style={{alignSelf: "start", marginLeft:'30px'}}>
      <ul className={ftSty.aboutListTop}>
        <li>
          <h4 className={ftSty.aboutListTitle}>Contact Us</h4>
        </li>
        <li>
          <Link to='/contact' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`} itemprop="significantLink">southsidePaintMore@gmail.com</Link>
        </li>
        <li>
          <Link to='/contact' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`} itemprop="significantLink">904-555-9828</Link>
        </li>
        {/* <li>
          <Link to='/contact' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`} itemprop="significantLink">GALLERY OF WORK</Link>
        </li>
        <li>
          <Link to='/careers' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`} itemprop="significantLink">JOB OPENINGS</Link>
        </li> */}
        <li>
          <Link to='/contact' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`} itemprop="significantLink">SEND MESSAGE</Link>
        </li>
      </ul>
    </div>
   );
}
 
export default FooterContact;