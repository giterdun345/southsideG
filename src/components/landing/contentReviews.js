import React from 'react'
import './landing.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as ldSty from './landing.module.scss'

import {GrPrevious, GrNext} from 'react-icons/gr'

// button fix used to rid warning https://github.com/akiran/react-slick/issues/1195
const RightButtonFix = ({currentSlide, slideCount, children, ...props}) => (
  <GrNext{...props}>{children}</GrNext>
);

const LeftButtonFix = ({currentSlide, slideCount, children, ...props}) => (
  <GrPrevious{...props}>{children}</GrPrevious>
);

const ContentReviews = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000, 
    fade: true,
    arrows: true,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <RightButtonFix />,
    prevArrow: <LeftButtonFix />,
    dotsClass: `slick-dots ${ldSty.dots}`,
    className: ldSty.slides
  };

  return (
      <div className={ldSty.contentTxt}>
        <h2 className={ldSty.contentTitle}>Here's what our customers say:</h2>
        <div style={{margin:'2rem auto', width:'85%'}} >
            <Slider {...settings}>
              <div>
                <p>We've used Charles and his team at Southside Paint +More for years now. He's done amazing work at our rental property. The work is always above and beyond. They do a lot more than painting as well, door work, vent work, sheetrock, and faucet replacement. I highly recommend giving their team a shout for your next project.</p>
                <h4>Cheyanne W.</h4>
              </div>
              <div>
                <p>Charles and his team at Southside Paint + More were FANTASTIC! My wife and I just had the interior of our house painted and we could not have asked for a more professional, capable and efficient crew! From Charles giving the quote, to giving updates throughout the process, the communication was superior to that of other contractors. The high attention to detail and courteous actions of the entire team shows me they really care about providing amazing quality and value. HIGHLY recommend them for any work!</p>
                <h4>Jamie S.</h4>
              </div>
              <div>
                <p>Super company. Show up on time. Take care of everything. Really KNOW painting. Everyone was very experienced. Totally professional outfit. Would highly recommend them for any painting job. Tile guy is excellent also.</p>
                <h4>Mike C.</h4>
              </div>
              <div>
                <p>Work is completed quickly, and done very proficiently. Very knowledgeable about their trade. Professional, hard-workers makes for a smooth transaction from start to finish. Highly recommended.</p>
                <h4>Jenifer B.</h4>
              </div>
              <div>
                <p>I am very pleased with Southside Paint and More. I contacted multiple companies to repair the drywall and repaint in my rental home. They were very prompt to contact me, schedule my estimate, and my repair work. They also had the best price. The work was very well done. The leader of the team was very professional with frequent communication, recommendations, and updates. We will use them for all of our work in the future!</p>
                <h4>Linda S.</h4>
              </div>
              <div>
                <p>We had major water damage to our condo and needed extensive repairs in preparation for selling. Charles and his crew were professional, capable and efficient. He made several suggestions for the project which save us money even though I am sure it meant less of a profit for him. A person like Charles is hard to find in the construction business.</p>
                <h4>Charles H</h4>
              </div>
            </Slider>
          </div >
          <div style={{marginTop:'5rem'}}>
            <a href='https://www.google.com/search?q=google+reviews+southside+paint+and+more&oq=google+reviews+southside+paint+and+more+&aqs=chrome..69i57j69i64.6099j0j7&sourceid=chrome&ie=UTF-8#lrd=0x88e5b4e8f30a4409:0x660986e01c090be3,1,,,' >
              <button className={ldSty.btnOne}><span>More Reviews</span></button>
            </a>
          </div>      
       </div>
  );
}
 
export default ContentReviews;