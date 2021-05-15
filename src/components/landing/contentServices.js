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
              <div className={ldSty.cardTilte}>
                <h3>Interior Painting</h3>
              </div>
              <div className={ldSty.cardDeatails}>
                <h4>Interior Painting</h4>
                <p>
                  Having contractors doing work in your home can be disruptive. We make a remodel a pleaseant experience with consistency and communication.
                </p>
                <Link to="/contact">Learn More</Link>
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
                alt='exterior painting of a house with Mike' 
              />
            <div className={ldSty.cardTilte}>
              <h3>Exterior Painting</h3>
            </div>
            <div className={ldSty.cardDeatails}>
              <h4>Exterior Painting</h4>
              <p>
                We recognize that painting an exterior not only enhances its look but also protects your home from the elements we have in Florida. We take pride in that.
              </p>
              <Link to="/contact">Learn More</Link>
            </div>
          </div>
{/* PRESSuRE WASHING  */}
          <div className={ldSty.card}>
            <StaticImage
              src="../../images/pressurewashing.jpg"
              layout='constrained'
              loading= "lazy"
              objectFit="contain"
              placeholder='blurred'
              formats={["AUTO", "WEBP", "AVIF"]}
              alt='pressure washing contrast' 
            />
            <div className={ldSty.cardTilte}>
              <h3>Pressure Washing</h3>
            </div>
            <div className={ldSty.cardDeatails}>
              <h4>Pressure Washing</h4>
              <p>
                It is imperative to maintain your exterior to preserve the investment you made in your property. It's the easiest way to make your property look fresh without repairs.
              </p>
              <a href="/contact">Learn More</a>
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
              alt='removing wallpaper is a drag, let us do it' 
            />
            <div className={ldSty.cardTilte}>
              <h3>Wallpaper Removal</h3>
            </div>
            <div className={ldSty.cardDeatails}>
              <h4>Wallpaper Removal</h4>
              <p>
              Facing the headache of attempting the DIY route for removing old, damaged, or just plain ugly wallpaper? Want a smooth, fresh look for your walls? Save yourself the hassle!    
              </p>
              <a href="/contact">Learn More</a>
            </div>
          </div>
{/* CARPENTRY  */}
          <div className={ldSty.card}>
            <StaticImage
              src="../../images/carpentry.jpg"
              layout='constrained'
              loading= "lazy"
              objectFit="contain"
              placeholder='blurred'
              formats={["AUTO", "WEBP", "AVIF"]}
              alt='We like to pay special care to attention to detail on all molding and carpentry projects.' 
            />
            <div className={ldSty.cardTilte}>
              <h3>Carpentry</h3>
            </div>
            <div className={ldSty.cardDeatails}>
              <h4>Carpentry</h4>
              <p>
              Whether it’s interior wall repairs, exterior wood rot repairs, or installing decorative moldings, we can provide customizations with attention to detail and precision.    
              </p>
              <a href="/contact">Learn More</a>
            </div>
          </div>
{/* COLOR RESOURCES  */}
          <div className={ldSty.card}>
            <StaticImage
              src="../../images/swatches.jpg"
              layout='constrained'
              loading= "lazy"
              objectFit="contain"
              placeholder='blurred'
              formats={["AUTO", "WEBP", "AVIF"]}
              alt='Need help picking a color? We got you covered.' 
            />
            <div className={ldSty.cardTilte}>
              <h3>Color Resources</h3>
            </div>
            <div className={ldSty.cardDeatails}>
              <h4>Color Resources</h4>
              <p>
                We know choosing colors can be stressful. We can help you make a stress free decision. We can ease that pressure offering many resources and expertise in design.
              </p>
              <a href="/contact">Learn More</a>
            </div>
          </div>
{/* GEL STAINING */}
          <div className={ldSty.card}>
              <StaticImage
                src="../../images/gelstain.jpg"
                layout='constrained'
                loading= "lazy"
                objectFit="contain"
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='gel staining gives a fresh new look to an old pice of wood' 
              />
            <div className={ldSty.cardTilte}>
              <h3>Gel Staining</h3>
            </div>
            <div className={ldSty.cardDeatails}>
              <h4>Gel Staining</h4>
              <p>
                Do you want to refinish your kitchen cabinets, or some old dresser without spending having to strip and sand off the old finish? We got you covered either way. &nbsp;  </p>
              <Link to="/contact">Learn More</Link>
            </div>
          </div>
        </div>
      <Link to='/services'><button className={ldSty.btnOne}><span>More Services</span></button></Link>
    </div>
  )
}
 
export default ContentServices;