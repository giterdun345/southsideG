import React from 'react'
import { Link } from 'gatsby'
import * as ftSty from './footer.module.scss'
// ICONS 
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const FooterConnect = () => {
  return ( 
    <div className={ftSty.connectContainer}>
      <div className={`${ftSty.socialSection} ${ftSty.flexRow}`} >
      <span className={`${ftSty.socialOverlap}`}>
        CONNECT
      </span>
      <span className={ftSty.socialSmall}>
        with
      </span>
      <span className={`${ftSty.socialOverlap}`}>
        US
      </span>
    </div>
    <span className={`${ftSty.socialIconWrapper} ${ftSty.socialOverlap}`} >
    <Link to="https://www.facebook.com/paviliongift" className={ftSty.genericAnchor} target="_blank" title="Facebook" itemprop="significantLink"><FaFacebook /></Link>
    <Link to="https://twitter.com/PavilionGiftCo" className={ftSty.genericAnchor} target="_blank" title="Twitter" itemprop="significantLink"><FaTwitter/></Link>
    <Link to="http://instagram.com/paviliongiftcompany" className={ftSty.genericAnchor} target="_blank" title="Instagram" itemprop="significantLink"><FaInstagram /></Link>
    </span>
  </div>

   );
}
 
export default FooterConnect;