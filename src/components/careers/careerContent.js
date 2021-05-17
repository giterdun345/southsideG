import React from 'react'
import * as crSty from './career.module.scss'

const CareerContent = () => {
  return ( 
   <div className={crSty.careerTop}>
     <h1>Join Our Team</h1>
     <div>
        <p className={crSty.subText}>   
          We are always looking for energetic and talented individuals to join our growing team.
          We are proud to offer a competitive hourly wage, uniforms, supplies, overtime, supplemental insurance, paid holidays, and opportunities for pay increases.
          Our paint company requires all employees to have a good attitude, take initiative, have attention to detail and have a reliable vehicle and valid driver’s license.  
        </p>
     </div>
      <div style={{backgroundColor:'rgb(228, 228, 228)'}}>
        <h2>Our Mission</h2>  
        <div className={crSty.mission}>
        <p>
          We strive to engage and build long standing relationships with our customers, whether they are individuals or an organization. Our aim is to retain our existing client base along with gaining new business
          through referrals and we will achieve this by delivering exceptional quality, customer service and value for money on a consistent basis ensuring repeat business over and over.
          As one of Jacksonville's leading painting contractors, we are always on the look-out for great candidates who can help us achieve our mission of becoming THE number one painting contractor in the Jacksonville Area.
           If you are hungry to achieve, bright and want to excel, please get in touch today by filling out a form or giving us a call.
        </p> 
      </div>
      <div style={{ borderTop:'3px solid black', backgroundColor:'rgb(228, 228, 228)'}}>
        <h2>Our Values</h2> 
        <div className={crSty.mission}>
          <p>
            The promises made to our customers is a first priority. From the timing of their project to the budget, we are a family owned and operated business and it is key to success that we keep our word.
            We practice continuous improvement and are always thinking about how to make our customer’s experience better — from communicating and collaborating with them to delivering expert painting techniques.
            It is important to us that customers, and employees all feel valued and respected along every step of the way. We want you to grow with us..
          </p>
        </div>
      </div>
    </div>
  </div>
   );
}
 
export default CareerContent;



