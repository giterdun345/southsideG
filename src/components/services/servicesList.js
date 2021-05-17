import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'
import * as svSty from './services.module.scss'

const servicesList = () => {
  return ( 
    <div>
       <h1 className={svSty.servicesTitle}>Our Services</h1>
      <div className={svSty.services}>
        {/* flex container for services  */}
        {/* INTERIOR PAINTING  */}
        <div className={`${svSty.serviceItem}`}>
          <StaticImage
                src="../../images/pxImg.jpg"
                layout='fixed'
                loading= "lazy"
                transformOptions={{fit: "cover", cropFocus: "attention"}}
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='interior of house painted'
                width={375}
                height={300}
              />
          <h2>interior painting</h2>
        </div>
          {/* EXTERIOR PAINTING  */}
        <div className={`${svSty.serviceItem}`}>
          <StaticImage
                src="../../images/workexterior.jpg"
                layout='fixed'
                loading= "lazy"
                transformOptions={{fit: "cover", cropFocus: "attention"}}
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='wells fargo painted exterior'
                // style={{gridArea:'1/1'}} 
                width={375}
                height={300}
              />
          <h2>exterior painting</h2>
        </div>
          {/* WALL PAPER REMOVAL  */}
        <div className={`${svSty.serviceItem}`}>
          <StaticImage
                src="../../images/wallpaperCharles.jpg"
                layout='fixed'
                loading= "lazy"
                transformOptions={{fit: "cover", cropFocus: "attention"}}
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='charles removing some wallpaper'
                // style={{gridArea:'1/1'}} 
                width={375}
                height={300}
              />
          <h2>wallpaper removal</h2>
        </div>
          {/* COMMERCIAL PROJECTS  */}
        <div className={`${svSty.serviceItem}`}>
          <StaticImage
                src="../../images/workMike.jpg"
                layout='fixed'
                loading= "lazy"
                transformOptions={{fit: "cover", cropFocus: "attention"}}
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='Mike working away'
                // style={{gridArea:'1/1'}} 
                width={375}
                height={300}
              />
          <h2>commercial</h2>
        </div>
          {/* STAINING  */}
        <div className={`${svSty.serviceItem}`}>
          <StaticImage
                src="../../images/workstain.jpg"
                layout='fixed'
                loading= "lazy"
                transformOptions={{fit: "cover", cropFocus: "attention"}}
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='garage stained to perfection'
                // style={{gridArea:'1/1'}} 
                width={375}
                height={300}
              />
          <h2>Staining</h2>
        </div>
          {/* POPCORN CEILING REMOVAL  */}
        <div className={`${svSty.serviceItem}`}>
          <StaticImage
                src="../../images/popcorn.jpg"
                layout='fixed'
                loading= "lazy"
                transformOptions={{fit: "cover", cropFocus: "attention"}}
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='popcorn cieling from 1979'
                width={375}
                height={300}
              />
          <h2>Popcorn Removal</h2>
        </div>
          {/* DECK RESTORATION  */}
        <div className={`${svSty.serviceItem}`}>
          <StaticImage
                src="../../images/deck.jpg"
                layout='fixed'
                loading= "lazy"
                transformOptions={{fit: "cover", cropFocus: "attention"}}
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='a deck for some tlc'
                width={375}
                height={300}
              />
          <h2>Deck Restoration</h2>
        </div>
          {/* PLASTER AND DRYWALL  */}
        <div className={`${svSty.serviceItem}`}>
          <StaticImage
                src="../../images/drywall.jpg"
                layout='fixed'
                loading= "lazy"
                transformOptions={{fit: "cover", cropFocus: "attention"}}
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='fresh drywall'
                width={375}
                height={300}
              />
          <h2>Plaster and drywall</h2>
        </div>
          {/* EPOXY COATINGS  */}
        <div className={`${svSty.serviceItem}`}>
          <StaticImage
                src="../../images/epoxy.jpg"
                layout='fixed'
                loading= "lazy"
                transformOptions={{fit: "cover", cropFocus: "attention"}}
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='a fresh coat of epoxy'
                width={375}
                height={300}
              />
          <h2>Epoxy Coatings</h2>
        </div>
          {/* WOOD WORK  */}
        <div className={`${svSty.serviceItem}`}>
          <StaticImage
                src="../../images/workinterior.jpg"
                layout='fixed'
                loading= "lazy"
                transformOptions={{fit: "cover", cropFocus: "attention"}}
                placeholder='blurred'
                formats={["AUTO", "WEBP", "AVIF"]}
                alt='interior of church painted'
                // style={{gridArea:'1/1'}} 
                width={375}
                height={300}
              />
          <h2>wood work</h2>
        </div>
      </div>
    </div>
   );
}
 
export default servicesList;
