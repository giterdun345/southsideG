import React from 'react'
import Seo from "../components/layout/seo"
import {useStaticQuery, graphql} from 'gatsby';
import SimpleReactLightbox, { SRLWrapper }  from 'simple-react-lightbox'


import * as gdSty from '../components/gallery/gallery.module.scss'

import Layout from "../components/layout/layout"

const Gallery = () => {
    const data = useStaticQuery(
      graphql`
      query CloudinaryImage {
          allCloudinaryMedia {
          edges {
              node {
                  secure_url
                  context {
                      custom {
                          alt
                        
                      }
                  }
                  resource_type
              }
          }
        }
      }`
    );

  const images = data.allCloudinaryMedia.edges;

  return ( 
    <Layout>
      <Seo title="Gallery" />
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className={gdSty.imagegrid}>
              {images.map((image, index) => (
                  <div className={gdSty.imageitem} key={`${index}-image`}>
                      <img 
                          src={image.node.secure_url} 
                          alt={image.node.context.custom.alt} >
                      </img>
                  </div>
                  ))
              }
          </div>
          </SRLWrapper>
        </SimpleReactLightbox>
    </Layout>
   );
}
 
export default Gallery;