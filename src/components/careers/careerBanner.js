import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'

import * as crSty from './career.module.scss'

const CareerBanner = () => {
  return ( 
    <div className={crSty.bannerList}>
      <div className={crSty.bannerItem}>
        <StaticImage
              src="../../images/team2.jpeg"
              layout='constrained'
              objectFit='cover'
              placeholder='blurred'
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="sillohuette of workers on roof"
              height={200}
              className={crSty.bannerImg}
          />
          <h3>A Great Team</h3>
      </div>
      <div className={crSty.bannerItem}>
        <StaticImage
              src="../../images/recognition.jpeg"
              layout='constrained'
              objectFit='cover'
              placeholder='blurred'
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="array of colors"
              height={200}
              className={crSty.bannerImg}
        />
        <h3>Recognition</h3>
      </div>
      <div className={crSty.bannerItem}>
        <StaticImage
              src="../../images/team1.jpg"
              layout='constrained'
              objectFit='cover'
              placeholder='blurred'
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="two workers assisting each other"
              height={200}
              className={crSty.bannerImg}
        />
        <h3>Training</h3>
      </div>
     
    </div>
   );
}
 
export default CareerBanner;