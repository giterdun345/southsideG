// this is for the landing overlay with two buttons circling perimeter 

<div className={ldSty.subTitle}>
{/* <h3>Operating in Jacksonville since 2000</h3> */}
<h4>Schedule your free Estimate</h4>
  <div className={ldSty.ctaButtons}>
    <button>Free Estimate
      <span />
      <span />
      <span />
      <span />
    </button>
    <button>Call Now
    <span />
    <span />
    <span />
    <span />
    </button>
  </div>
</div>


// .subTitle{
//   background-color: rgba(0, 0, 0, 0.4);
//   border-radius: 25px;
//   text-align: center;
//   padding: 10px;
//   font: 17px $Arsenal;
//   font-style: italic;
//   color: white;
//   margin: 20px auto;
//   width: 30em;
// }

// .ctaButtons{
//   margin-top: 10px;
//   display: flex;
//   justify-content: space-around;

//   button{
//     width:45%;
//     height:3.5rem;
//     background: #1e130c;  /* fallback for old browsers */
//     background: -webkit-linear-gradient(to right, #9a8478, #1e130c);  /* Chrome 10-25, Safari 5.1-6 */
//     background: linear-gradient(to right, #9a8478, #1e130c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
//     border-style: none;
//     border-radius: 5px;
//     color:#fff;
//     font-size: 1em;
//     letter-spacing: 3px;
//     font-family: $Bebas;
//     outline: none;
//     cursor: pointer;
//     position: relative;
//     padding: 0px;
//     overflow: hidden;
//     transition: all .5s;
//     box-shadow: 0px 1px 2px rgba(0,0,0,.2);
// }

// button:nth-child(2){
//   background: linear-gradient(to left, #9a8478, #1e130c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

// }
// button span{
//     position: absolute;
//     display: block;
// }
// button span:nth-child(1){
//     height: 3px;
//     width:200px;
//     top:0px;
//     left:-200px;
//     background: linear-gradient(to right, rgba(0,0,0,0), #CFB53B);
//     border-bottom-right-radius: 1px;
//     animation: span1 2s linear infinite;
//     animation-delay: 1s;
// }

// @keyframes span1{
//     0%{
//         left:-200px
//     }
//     100%{
//         left:200px;
//     }
// }
// button span:nth-child(2){
//     height: 70px;
//     width: 3px;
//     top:-70px;
//     right:0px;
//     background: linear-gradient(to left, rgba(0,0,0,0), #CFB53B);
//     border-bottom-left-radius: 1px;
//     border-bottom-right-radius: 1px;
//     animation: span2 2s linear infinite;
//     animation-delay: 2s;
// }
// @keyframes span2{
//     0%{
//         top:-70px;
//     }
//     100%{
//         top:70px;
//     }
// }
// button span:nth-child(3){
//     height:3px;
//     width:200px;
//     right:-200px;
//     bottom: 0px;
//     background: linear-gradient(to left, rgba(0,0,0,0), #CFB53B);
//     border-top-left-radius: 1px;
//     border-bottom-left-radius: 1px;
//     animation: span3 2s linear infinite;
//     animation-delay: 3s;
// }
// @keyframes span3{
//     0%{
//         right:-200px;
//     }
//     100%{
//         right: 200px;
//     }
// }

// button span:nth-child(4){
//     height:70px;
//     width:3px;
//     bottom:-70px;
//     left:0px;
//     background: linear-gradient(to top, rgba(0,0,0,0), #CFB53B);
//     border-top-right-radius: 1px;
//     border-top-left-radius: 1px;
//     animation: span4 2s linear infinite;
//     animation-delay: 4s;
// }
// @keyframes span4{
//     0%{
//         bottom: -70px;
//     }
//     100%{
//         bottom:70px;
//     }
// }

// button:hover{
//     transition: all .5s;
//     transform: rotate(-3deg) scale(1.1);
//     box-shadow: 0px 3px 5px rgba(0,0,0,.4);
// }
// button:hover span{
//     animation-play-state: paused;
// }

// }


// @media (max-width: 768px){
//   .heroOverlay{
//     white-space: nowrap;
//     color: white;
//       h2, h3, h4{
//         margin: 0;
//       } 
//       h2{
//         margin: 0 15px;
//         font-size: 1.75rem;
//       }
//   }
// }

// @media (max-width: 426px){
//   .heroOverlay{
//     white-space: nowrap;
//     color: white;
//       h2, h4{
//         margin: 0;
//       } 
//       h3{
//         display: none;
//       }
//       h2{
//         margin: 0 15px;
//         font-size: 1rem;
//       }
//       button{
//         font-size: 13px;
//       }
//   }

//   .subTitle{
//     background-color: rgba(0, 0, 0, 0.4);
//     text-align: center;
//     font: 15px $Arsenal;
//     width: 245px !important;
//   }
// }

{/* <div style={{display: 'grid',  placeItems: 'center'}}>
        <StaticImage
          src="../../images/swoosh.png"
          layout='constrained'
          width={450}
          placeholder='dominantColor'
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Nicely painted kitchen and living room"
          style={{gridArea:'1/1'}}
          transformOptions={{fit:'cover', cropFocus:"attention"}}
          />
          <StaticImage
          src="../../images/workmanshipImg.jpg"
          layout='constrained'
          width={250}
          placeholder='blurred'
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Nicely painted kitchen and living room"
          style={{gridArea:'1/1'}}
          />

        </div> */}




        // .workmanshipContainer{

          //   display: flex;
          //   flex-flow: row wrap;
          //   justify-content: space-around;
          //   align-content: center;
          //   text-align: center;
          //   width: 80%;
          //   margin: 5rem auto;
          
          //   .workmanshipTxt{
          //     width: 60%;
          //     align-self: center;
          //   }
          
          //   button{
          //     width: 100%;
          //   }
          
          //   // .workmanshipImg{
          //   //   display: grid;
          //   //   position: relative;
          //   //   place-items: center;
            
          //   //   .workmanshipOverlay{
          //   //     grid-area: 1 / 1;
          //   //   }
          // }
          