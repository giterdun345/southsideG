import React, { useState } from "react"
import PropTypes from "prop-types"

// components 
import Footer from "../footer/footer"
import SideDrawer from "../header/sideDrawer"
import Navlinks from '../header/navlinks'
import { Divide as Hamburger } from 'hamburger-react'
import Logo from '../header/logo'

// styles 
import * as hdSty from '../header/header.module.scss';
import 'normalize.css';
import "./layout.scss"


const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <header className={hdSty.headerContainer}>
        <nav className={hdSty.navbar}>
          <Logo />
          <Navlinks />
           <div className={hdSty.hamburger}>
              <Hamburger rounded toggled={isOpen} toggle={setIsOpen} size={60} duration={0.8} color={'#4C5B61'} label="Show navigation links" />
           </div>
        </nav>
      </header>
      {/* menu opening based on state isOpen  */}
      {isOpen && <SideDrawer open= {isOpen} />}
      {/* main content  */}
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
