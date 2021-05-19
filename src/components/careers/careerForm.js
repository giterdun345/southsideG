import React from 'react'
import * as crSty from './career.module.scss'
import {CgAsterisk} from 'react-icons/cg'

const CareerForm = () => {
  return ( 
    <div className={crSty.formContainer}>
      <h2>Submit an Application</h2>
      {/* <form action="https://formspree.io/f/meqvavop" method="POST" > */}
      <form name="applicationV2" method="POST" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="applicationV2" />
            {/* FULL NAME  */}
          <div className={crSty.formGroup}>
            <label for="name" required>
              <span><CgAsterisk /></span> Full Name <br/>
              <input name="Full_name" type="text" placeholder="e.g. Phillip Anthropy" required/>
            </label>
          </div>
            {/* EMAIL ADRRESS  */}
          <div className={crSty.formGroup}>
            <label for="email" required>
              <span><CgAsterisk /></span> Email Address <br/>
              <input name="Contact_email" type="email" placeholder="e.g. user@email.com" required />
            </label>
          </div>
          {/* PHONE NUMBER  */}
          <div className={crSty.formGroup}>
            <label for="phone" required>
              <span><CgAsterisk /></span> Phone Number <br/>
              <input name="Contact_phone" type="tel" placeholder="e.g. 555-0000" required/>
            </label> 
          </div>
        {/* FULL TIME OR PART TIME  */}
          <div className={`${crSty.typeBoxTitle} ${crSty.formGroup}`}>
              <h4>Part-time or Full-time position?</h4>
              <div className={crSty.typeBox}>
                <label for="fulltime">
                  Full Time
                  <input type="checkbox" name="fulltime" value="full_time"/>
                </label>
                <label for="parttime">
                  Part Time
                  <input type="checkbox" name="parttime" value="part_time"/>
                </label>
              </div>
          </div>
          {/* DO YOU HAVE LICENSE */}
          <div className={`${crSty.typeBoxTitle} ${crSty.formGroup}`}>
            <h4>Do you have a valid driver's license?</h4> 
            <div className={crSty.typeBox} >
              <label for="license">
                Yes
                <input type="radio" name="Yeslicense" value="yes_license" checked/>
              </label>
              <label for="license">
                No
                <input type="radio" name="Nolicense" value="no_license" />
              </label>
            </div>
          </div> 
          {/* DO YOU HAVE TRANSPORTATION */}
          <div className={`${crSty.typeBoxTitle} ${crSty.formGroup}`}>
            <h4>Do you have your own transportation?</h4>
            <div className={crSty.typeBox} >
              <label for="transportation">
                Yes
                <input type="radio" name="transportation" value="yes_transportation" checked/>
              </label>
              <label for="transportation">
                No
                <input type="radio" name="transportation" value="no_transportation" />
              </label>
            </div>
          </div> 
          {/* YEARS OF Experience */}
          <div className={crSty.formGroup} style={{minWidth:'300px'}}>
            <label for="yearsexperience">Years of Experience <br/>
              <input name="yearsexperience" type="number" placeholder="1" required/>
            </label>
          </div> 
          {/* START DATE  */}
          <div className={crSty.formGroup}>
            <label for="startdate">
              When can you start? <br/>
              <input name="startdate" type="date" />
            </label>
          </div> 
          {/* QUESTION */}
          <div className={crSty.formGroup} >
            <label for='question'>
              In 300 characters or less, tell us why we should hire you? <br/>
              <textarea name="question" placeholder="Make it good!" maxlength='300' required />
            </label>
          </div>
           {/* RESUME UPLOAD  */}
          <div className={crSty.formGroup}>
            <label for="resume">
              Upload your resume <br/>
              <input type="file" name="resume" />
            </label>
          </div>       
          <div style={{textAlign:'center'}}>
            <button type='submit' value="submit">Submit Application</button>
          </div>
      </form>
      
    </div>
   );
}
 
export default CareerForm;