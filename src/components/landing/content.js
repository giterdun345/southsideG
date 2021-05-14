import React from 'react'
import * as ldSty from './landing.module.scss'
import { StaticImage } from "gatsby-plugin-image"


const Content = () => {
  return ( 
    <div className={ldSty.contentContainer}>
      <div className={ldSty.workmanshipContainer}>
        <div className={ldSty.workmanshipTxt}>
          <h2>Superb Workmanship To Give Your Place a Fresh Start</h2>
          <p> When someone arrives at your home or place of business, something as simple as the color and quality of the paint can make a significant impact on their first impression. With help from our team
              here at Southside Paint + More, you can arrive at your property with a fresh feel, new look and a reflection of your personal style. We offer you pristine painting services as well as an array of 
              related jobs with competitive prices and satisfication guaranteed. We take pride in our work and complete the job right the <span style={{color: '#FD5200'}}>first time</span>!
              <button style={{display: 'block'}}>Request Free Consultation</button>
          </p>
        </div>
        
        <div style={{display: 'grid',  placeItems: 'center'}}>
        <StaticImage
          src="../../images/swoosh.png"
          layout='constrained'
          width={450}
          placeholder='dominantColor'
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Nicely painted kitchen and living room"
          style={{gridArea:'1/1'}}
          transformOptions={{fit:'cover', cropFocus:"attention"}}
          />
          <StaticImage
          src="../../images/workmanshipImg.jpg"
          layout='constrained'
          width={250}
          placeholder='blurred'
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Nicely painted kitchen and living room"
          style={{gridArea:'1/1'}}
          />

        </div>
      </div>
      
      <div>
        <h3>Veniam quis et ut Lorem quis. Sint proident deserunt cillum labore et in dolore veniam sint exercitation sunt. Do non enim aliquip quis officia officia magna voluptate cupidatat amet. Aliqua laborum ex nulla aute. Consequat aute qui proident fugiat duis ea commodo aliquip ipsum nisi enim dolor.</h3>
        cards here of some services
      </div>
    
      <div>
        <h3>Here's what our customers had to say:</h3>
          Carousel for reviews
      </div>
      <div>
        <h3>Why choose us?</h3>
          icons or something to outline the reasons
      </div>
      <div className={ldSty.contentHeader}>
        <p>Welcome to</p>
        <div className={ldSty.titleContainer}>
              <h1 className={ldSty.heroTitle}>
                Southside <span>Paint + More</span>
              </h1>
              <StaticImage
              src="../../images/swoosh.png"
              layout='fullWidth'
              // width={200}
              placeholder='blurred'
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="paint swoosh"
              style={{gridArea:'1/1'}}
              />
            </div>
        <hr></hr>
        <p>Nisi irure proident cupidatat est cupidatat pariatur Lorem deserunt cillum. Quis laboris do ipsum laboris do exercitation qui in. Deserunt irure magna ad aliquip tempor. In fugiat ut ullamco ullamco. Est elit do laborum reprehenderit veniam id cillum consectetur labore. Ad voluptate enim eiusmod incididunt anim. Amet mollit eiusmod nisi occaecat.</p>
      </div>
     
    </div>
   );
}
 
export default Content;