import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Logo = () => {
  return ( 
    <Link to='/'>
            <StaticImage 
              src="../../images/ssp-logo.png"
              width={150}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Southside Paint + More Logo"
            />
    </Link>
   );
}
 
export default Logo;