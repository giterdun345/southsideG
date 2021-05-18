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
          <Link to='/services' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`}>WHAT WE HAVE TO OFFER</Link>
        </li>
        <li>
          <Link to='/contact' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`}>FREE ESTIMATE</Link>
        </li>
        <li>
          <Link to='/gallery' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`}>GALLERY OF WORK</Link>
        </li>
        <li>
          <Link to='/careers' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`}>JOB OPENINGS</Link>
        </li>
        {/* <li>
          <Link to='/about' className={`${ftSty.genericAnchor}, ${ftSty.footerListAnchor}`}>MORE ABOUT US</Link>
        </li> */}
      </ul>
    </div>
   );
}
 
export default FooterAbout;