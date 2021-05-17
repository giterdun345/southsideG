import React from 'react'
import * as crSty from './career.module.scss'

import {CgAsterisk} from 'react-icons/cg'
const CareerForm = () => {
  return ( 
    <div>
      <h2>Application</h2>
      <form name="applications" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact-form" />
            {/* FULL NAME  */}
          <div className={crSty.formGroup}>
            <label for="name" required>
              <span></span> Full Name <CgAsterisk />
              <input name="name" type="text" placeholder="e.g. Phillip Anthropy" required/>
            </label>
          </div>
            {/* EMAIL ADRRESS  */}
          <div className={crSty.formGroup}>
            <label for="email" required>
              <span><CgAsterisk /></span> Email Adress 
              <input name="email" type="email" placeholder="e.g. user@email.com" required />
            </label>
          </div>
          {/* PHONE NUMBER  */}
          <div className={crSty.formGroup}>
            <label for="phone" required>
              <span><CgAsterisk /></span> Phone Number 
              <input name="phone" type="tel" placeholder="e.g. 555-0000" required/>
            </label> 
          </div>
        {/* FULL TIME OR PART TIME  */}
          <div className={crSty.timeType}>
            <div>
              <label for="fullPart">
                Full Time
                <input type="radio" name="fullPart" value="full-time" />
              </label>
            </div>
            <div>
              <label for="fullPart">
                Part Time
                <input type="radio" name="fullPart" value="part-time" />
              </label>
            </div>
          </div>
          {/* DO YOU HAVE LICENSE */}
          <div className={crSty.license}>
            <div>
              Do you have a valid driver's license?
              <label for="license">
                Yes
                <input type="radio" name="license" value="yes license" checked/>
              </label>
              <label for="license">
                No
                <input type="radio" name="license" value="no license" />
              </label>
            </div>
          </div>
            {/* DO YOU HAVE TRANSPORTATION  */}
          <div className={crSty.transportation}>
            Do you have your own transportation?
            <label for="transportation">
              Yes
              <input type="radio" name="transportation" value="no transportation" checked/>
            </label>
            <label for="transportation">
              No
              <input type="radio" name="transportation" value="yes transportation" />
            </label>
          </div>
          {/* YEARS OF Experience */}
          <div className={crSty.formGroup}>
            <label for="years experience">Years of Experience</label>
            <input name="years-experience" type="number" placeholder="1" required/>
          </div>
          {/* START DATE  */}
          <div className={crSty.formGroup}>
            <label for="start date">
              When can you start?
              <input name="start date" type="date" />
            </label>
          </div>
          {/* QUESTION  */}
          <div className={crSty.question} >
            <label for='question'>
              In 200 words or less, tell us why we should hire you?
              <textarea name="question" placeholder="Make it good!" required />
            </label>
          </div>
           {/* RESUME UPLOAD  */}
          <div className={crSty.upload}>
            <label for="resume">
              Upload your resume
              <input type="file" name="resume" />
            </label>
          </div>       
      </form>
    </div>
   );
}
 
export default CareerForm;