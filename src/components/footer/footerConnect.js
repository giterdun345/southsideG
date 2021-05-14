import React from 'react'
import * as ftSty from './footer.module.scss'
// ICONS 
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
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
    <a href="https://www.facebook.com/SSPAINTNMORE/" className={ftSty.genericAnchor} target="_blank" rel="noreferrer" title="Facebook" >
      <FaFacebook className={ftSty.socialIcon}/>
    </a>
    <a href="https://twitter.com/intent/tweet?text=I%20wanted%20to%20share%20this%20great%20website%20with%20you&url=https://www.southsidepaintplusmore.com/" className={ftSty.genericAnchor} target="_blank" rel="noreferrer" title="Twitter" >
      <FaTwitter className={ftSty.socialIcon}/>
    </a>
    <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.southsidepaintplusmore.com%2F" className={ftSty.genericAnchor} target="_blank" rel="noreferrer" title="Instagram" >
      <FaLinkedin className={ftSty.socialIcon}/>
    </a>
    </span>
  </div>

   );
}
 
export default FooterConnect;