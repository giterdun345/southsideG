import React from 'react'
import { Link } from "gatsby"
import * as hdSty from './header.module.scss';

const Navlinks = (props) => {
  return ( 
    <ul className={hdSty.navList}>
            <li>
              <Link to='/services'className={hdSty.navLink}>Services</Link>
            </li>
            <li>
              <Link to='/gallery' className={hdSty.navLink}>Gallery</Link>
            </li>
            <li>
              <Link to='/careers' className={hdSty.navLink}>Careers</Link>
            </li>
            <li>
              <Link to='/contact' className={hdSty.navLink}>Contact</Link>
            </li>
          </ul>
         
   );
}
 
export default Navlinks;