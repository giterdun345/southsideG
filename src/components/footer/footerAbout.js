import React from 'react'
import { Link } from 'gatsby'

import * as ftSty from './footer.module.scss'


const FooterAbout = () => {
  return ( 
    <div>
      <ul className={ftSty.aboutListTop}>
        <li>
          <h4 className={ftSty.aboutListTitle}>About Us</h4>
        </li>
        <li>
          <Link to='/services' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`} itemprop="significantLink">WHAT WE HAVE TO OFFER</Link>
        </li>
        <li>
          <Link to='/contact' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`} itemprop="significantLink">FREE ESTIMATE</Link>
        </li>
        <li>
          <Link to='/gallery' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`} itemprop="significantLink">GALLERY OF WORK</Link>
        </li>
        <li>
          <Link to='/careers' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`} itemprop="significantLink">JOB OPENINGS</Link>
        </li>
        <li>
          <Link to='/contact' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`} itemprop="significantLink">REACH OUT</Link>
        </li>
      </ul>
    </div>
   );
}
 
export default FooterAbout;