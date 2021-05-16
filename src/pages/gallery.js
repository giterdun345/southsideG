import React from 'react'
import Seo from "../components/layout/seo"
import {useStaticQuery, graphql} from 'gatsby';


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
                        caption
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
    
      <div className="container">
            {images.map((image, index) => (
                <figure className="wave" key={`${index}-image`}>
                    <img 
                        src={image.node.secure_url} 
                        alt={image.node.context.custom.alt} >
                        className={}
                    </img>
                    <figcaption>{image.node.context.custom.caption}</figcaption>
                </figure>
                ))
            }
        </div>
    </Layout>
   );
}
 
export default Gallery;