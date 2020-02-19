import React from "react";
import { Slide } from "react-slideshow-image";
import "./style.css";
import img2 from "./imgSlide2.jpg";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <img src={img2} alt="img2"></img>
        </div>

        <div className="each-slide">
          <img src={img2} alt="img2"></img>
        </div>

        <div className="each-slide">
          <img src={img2} alt="imgimg2"></img>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow; /* Exportando apresentação */
