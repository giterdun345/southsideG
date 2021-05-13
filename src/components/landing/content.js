import React from 'react'
import * as ldSty from './landing.module.scss'


const Content = () => {
  return ( 
    <div className={ldSty.contentContainer}>
      <div className={ldSty.contentHeader}>
        <p>Welcome to</p>
        <h2>Southside</h2>
        <h2>Paint + More</h2>
        <hr></hr>
        <p>Nisi irure proident cupidatat est cupidatat pariatur Lorem deserunt cillum. Quis laboris do ipsum laboris do exercitation qui in. Deserunt irure magna ad aliquip tempor. In fugiat ut ullamco ullamco. Est elit do laborum reprehenderit veniam id cillum consectetur labore. Ad voluptate enim eiusmod incididunt anim. Amet mollit eiusmod nisi occaecat.</p>
      </div>
     
      <div>
        <h3>Veniam quis et ut Lorem quis. Sint proident deserunt cillum labore et in dolore veniam sint exercitation sunt. Do non enim aliquip quis officia officia magna voluptate cupidatat amet. Aliqua laborum ex nulla aute. Consequat aute qui proident fugiat duis ea commodo aliquip ipsum nisi enim dolor.</h3>
        cards here of some services
      </div>
    
      <div>
        <h3>Here's what our customers had to say:</h3>
          Carousel for reviews
      </div>
      <div>
        <h3>Why choose us?</h3>
          icons or something to outline the reasons
      </div>
    </div>
   );
}
 
export default Content;