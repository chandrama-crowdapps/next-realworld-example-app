import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import techImg1 from "../../assets/img/node.png";
import techImg2 from "../../assets/img/swift.png";
import techImg3 from "../../assets/img/java.png";
import techImg4 from "../../assets/img/php.png";
import techImg5 from "../../assets/img/vue.png";

import Carousel from "react-grid-carousel"; 
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Technology() {
 
  return (
    <div className="our-technology">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <span data-aos="fade-right" data-aos-duration="3000">
                Technologies
              </span>
              <h2 data-aos="fade-right" data-aos-duration="2000">
                Our Technologies
              </h2>
              </ScrollAnimation>
            </div>
          </div>
        </div>
       
            <div className="row">
            <div className="row tech-img">
            <Carousel cols={4} rows={1} gap={10} loop autoplay={2000} >
              <Carousel.Item >
                <img src={techImg1} className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item >
                <img src={techImg2} className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item >
                <img src={techImg3} className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item >
                <img src={techImg4} className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item >
                <img src={techImg5} className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item >
                <img src={techImg1} className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item >
                <img src={techImg2} className="img-fluid" />
              </Carousel.Item>
              <Carousel.Item >
                <img src={techImg3} className="img-fluid" />
              </Carousel.Item>
              </Carousel>
            </div>
          </div>
          
      </div>
    </div>
  );
}

export default Technology;
