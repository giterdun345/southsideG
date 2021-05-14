import React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as ldSty from './landing.module.scss'

const ContentServices = () => {
  
  return ( 
    <div className={ldSty.contentTxt}>
      <h2 className={ldSty.contentTitle}>Our Extensive Suite of Services Includes:</h2>
        <div className={ldSty.cardContainer}>
          {/* INTERIOR PAINTING  */}
          <div className={ldSty.card}>
              <StaticImage
                src="../../images/interiorpChurch.jpg"
                layout='constrained'
                loading= "lazy"
                objectFit="contain"
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='interior of church painted' 
              />
              <h3>Interior Painting</h3>
              <div className={ldSty.cardOverlay}>
                <p className={ldSty.cardTxt}>
                   Having contractors doing work in your home can be disruptive. We make a remodel a pleaseant experience with consistency and communication.
                </p>
                <button> Get Estimate </button>
              </div>
          </div>
          {/* EXTERIOR PAINTING  */}
          <div className={ldSty.card}>
              <StaticImage
                src="../../images/exteriorp.jpg"
                layout='constrained'
                loading= "lazy"
                objectFit="contain"
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='interior of church painted' 
              />
              <h3>Exterior Painting</h3>
              <div className={ldSty.cardOverlay}>
                <p className={ldSty.cardTxt}>
                   We recognize that painting an exterior not only enhances its look but also protects your home from the elements we have in Florida.
                </p>
                <button> Get Estimate </button>
              </div>
          </div>
          {/* PRESSURE WASHING  */}
          <div className={ldSty.card}>
              <StaticImage
                src="../../images/pressurewashing.jpg"
                layout='constrained'
                loading= "lazy"
                objectFit="contain"
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='interior of church painted' 
              />
              <h3>Pressure Washing</h3>
              <div className={ldSty.cardOverlay}>
                <p className={ldSty.cardTxt}>
                  It is imperative to maintain your exterior to preserve the investment you made in your property. It's the easiest way to make your property look fresh without repairs.
                </p>
                <button> Get Estimate </button>
              </div>
          </div>
           {/* WALLPAPER REMOVAL  */}
          <div className={ldSty.card}>
              <StaticImage
                src="../../images/wallpaper.jpg"
                layout='constrained'
                loading= "lazy"
                objectFit="contain"
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='interior of church painted' 
              />
              <h3>Wallpaper Removal</h3>
              <div className={ldSty.cardOverlay}>
                <p className={ldSty.cardTxt}>
                  It is imperative to maintain your exterior to preserve the investment you made in your property. It's the easiest way to make your property look fresh without repairs.
                </p>
                <button> Get Estimate </button>
              </div>
          </div>
        
        </div>
    <Link to='/services'><button className={ldSty.btnOne}><span>More Services</span></button></Link>

  </div>

  );
}
 



export default ContentServices;