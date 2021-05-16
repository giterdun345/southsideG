import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as ldSty from './landing.module.scss'

const ContentChoose = () => {
  return ( 
    <div className={ldSty.contentTxt}>
      <h2 className={ldSty.contentTitle}>Why Choose Us?</h2>
      <p style={{margin:'3rem auto'}}> Our commitment to excellence, attention to detail and outstanding customer service has allowed us to become who we are today. With over 20 years in the industry, we are able to offer our expertise with a 100% satisfaction gaurunteed.      </p>
      {/* ROW 1  */}
      <div className={ldSty.chooseContainer}>
        <div className={`${ldSty.chooseTxt}`}>
          <h2>Customer Service</h2>
          <ul>
            <li>Friendly & Accommodating Staff – Our owner Charles will be available to you from first contact to job completion and beyond.</li>
            <li>Excellent Communication – We return phone calls, emails, texts and estimates promptly. We also make sure that you are involved throughout the painting process. You will know what to expect.</li>
            <li>Color Guiding – Choosing paint colors can be an overwhelming process so we offer a variety of tools to help guide your decision.</li>
         </ul>
        </div>
        <StaticImage
                src="../../images/working.jpg"
                layout='constrained'
                loading= "lazy"
                objectFit="contain"
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='customer service with sspm' 
                width={640}
              />
      </div> 
      {/* ROW 2  */}
      <div className={ldSty.chooseContainerX}>
        <StaticImage
                src="../../images/workEddie.jpg"
                layout='constrained'
                loading= "lazy"
                objectFit="contain"
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='customer service with sspm' 
                width={640}
              />
        <div className={`${ldSty.chooseTxt}`} >
          <h2>Detailed Workmanship</h2>
          <ul>
            <li>Attention To Detail – Straight lines, no mess, and a uniform coating are what we strive for and we take the time and effort to make sure we give our customers the best possible finished product. We treat your home like it’s our own.</li>
            <li>On Schedule & On Budget – Our estimation process is efficient in order to limit additional costs after the work has began and to give our customers an accurate schedule to plan around.</li>
          </ul>
        </div>
      </div> 
      {/* ROW 3  */}
      <div className={ldSty.chooseContainer}>
        <div className={`${ldSty.chooseTxt}`}>
          <h2>Quality Resources</h2>
          <ul>
            <li>High Quality – We believe the beauty and longevity that our customers obtain from using quality products makes up for the cost of using the best quality primers, paints, caulking and siding components.</li>
            <li>No Cutting Corners: Our reputation is based on using quality materials and paints and having the property look its best in each job we do. No half assed work. </li>
          </ul>
        </div>
        <StaticImage
                src="../../images/workwhite.jpg"
                layout='constrained'
                loading= "lazy"
                objectFit="contain"
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='customer service with sspm' 
                width={640}
              />
      </div>
  </div>
   );
}
 
export default ContentChoose;