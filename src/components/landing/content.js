import React from 'react'
import * as ldSty from './landing.module.scss'
import { StaticImage } from "gatsby-plugin-image"
// COMPONENTS 
import ContentAbout from './contentAbout'
import ContentServices from './contentServices'
const Content = () => {
  return ( 
    <div >
      <ContentAbout />
      <ContentServices />
    
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
