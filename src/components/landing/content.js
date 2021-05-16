import React from 'react'
// import * as ldSty from './landing.module.scss'
// import { StaticImage } from "gatsby-plugin-image"
// COMPONENTS 
import ContentAbout from './contentAbout'
import ContentServices from './contentServices'
import ContentChoose from './contentChoose'
import ContentReviews from './contentReviews'
const Content = () => {
  return ( 
    <div >
      <ContentAbout />
      <ContentServices />
      <ContentChoose />
      <ContentReviews />
    </div>
   );
}
 
export default Content;
