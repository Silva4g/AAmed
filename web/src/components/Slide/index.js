import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from "../../assets/imgSlide2.jpg";
//import img3 from "../../assets/imgSlide3.jpg";

const properties = {
  showArrows: true,
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  infiniteLoop: true,
  stopOnHover: true,
  interval: 3000,
  transitionTime: 550,
  autoPlay: true
};

export default function Slide() {
  return (
    <Carousel {...properties}>
      <div>
        <img src={img2} alt="" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={img2} alt="" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={img2} alt="" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src={img2} alt="" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src={img2} alt="" />
        {/* <p className="legend">Legend 5</p> */}
      </div>
    </Carousel>
  );
}
