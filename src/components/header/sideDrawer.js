import React from 'react'
import { Link } from "gatsby"
import * as hdSty from  './header.module.scss'

const sideDrawer = ({open}) => {


  return ( 
    <nav className={hdSty.wrapper}>
      <ul className={hdSty.card}>
        <li>
          <Link to='/services'className={hdSty.navLink}>Services</Link>
          <hr />
        </li>
        <li>
          <Link to='/gallery' className={hdSty.navLink}>Gallery</Link>
          <hr />
        </li>
        <li>
          <Link to='/careers' className={hdSty.navLink}>Careers</Link>
          <hr />
        </li>
        <li>
          <Link to='/contact' className={hdSty.navLink}>Contact</Link>
          <hr /> 
        </li>
      </ul>
    </nav>
   );
}

export default sideDrawer;
