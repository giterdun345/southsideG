import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import * as ldSty from './landing.module.scss'

const Hero = () => {
  return ( 
    <div style={{display: 'grid'}}>
      <StaticImage
        src="../images/heroImg.jpg"
        layout='fullWidth'
        placeholder='blurred'
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Nicely painted kitchen and living room"
        style={{gridArea:'1/1', }}
      />
      <div className={ldSty.heroOverlay}>
          {/* Any content here will be centered in the component */}
            <h1>Hero text</h1>
        </div>
    </div>
   );
}
 
export default Hero;