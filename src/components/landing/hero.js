import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
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
      <h1 className={ldSty.overlayTitle}>FRIENDLY. PROMPT. RELIABLE.</h1>
            <div className={ldSty.ctaButtons}>
              <button>Free Estimate</button>
              <button>Call Now</button>
            </div>
      </div>
    </div>
   );
}
 
export default Hero;