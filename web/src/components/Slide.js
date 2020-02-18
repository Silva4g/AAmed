import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slide.css'
import img1 from '../external/imgSlide1.jpg'

 const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
} 
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
          <img src ={img1 } alt="img1"></img>
            </div>
         
          <div className="each-slide">
          <img src ={img1} alt="img1"></img>
            </div>
          
          <div className="each-slide">
          <img src ={img1} alt="img1"></img>
            </div>
         
        </Slide>
      </div>
    )
}

export default Slideshow; /* Exportando apresentação */