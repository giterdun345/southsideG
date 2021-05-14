import React from 'react'
import {Link} from 'gatsby'
import * as ldSty from './landing.module.scss'

const ContentAbout = () => {
  return ( 
    <div className={ldSty.contentTxt}>
        <h2 className={ldSty.contentTitle}>Superb Workmanship To Give Your Place a Fresh Start</h2>
        <p> When someone arrives at your home or place of business, something as simple as the color and quality of the paint can make a significant impact on their first impression. With help from our team
            here at Southside Paint + More, you can arrive at your property with a fresh feel, new look and a reflection of your personal style. We offer you pristine painting services as well as an array of 
            related jobs with competitive prices and satisfication guaranteed. We take pride in our work and complete the job right the <span style={{color: '#FD5200'}}>first time</span>!
            <Link to='/contact' ><button className={ldSty.btnOne}><span>Request A Free Consultation</span></button></Link>
        </p>
      </div>
   );
}
 
export default ContentAbout;