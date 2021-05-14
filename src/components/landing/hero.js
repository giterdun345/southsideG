import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import * as ldSty from './landing.module.scss'

const Hero = () => {
  return ( 
    <div style={{display: 'grid'}} >
      <StaticImage
        src="../../images/heroImg.jpg"
        layout='fullWidth'
        placeholder='blurred'
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Nicely painted kitchen and living room"
        style={{gridArea:'1/1'}}
      />
      <div className={ldSty.heroOverlay}>
        <div className={ldSty.titleWrapper}>
            <h2 className={ldSty.overlayTitle}>FRIENDLY. PROMPT. RELIABLE.</h2>
            <h3 className={ldSty.overlaySubTitle}>Jacksonville's professional residential and commercial painters</h3>
            <h3>Family-Owned Since 2000</h3>   
          <div className={ldSty.ctaButtons}>
            <Link to='/contact' ><button>Free Estimate</button></Link>
            <a href='tel:904-524-8784'><button>Call Now</button></a>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Hero;