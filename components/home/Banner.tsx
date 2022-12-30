import React from "react";

import Carousel from "react-bootstrap/Carousel";
const bannerData=[
  {
    image:require('../../assets/images/hero.png'),
    title:'We are specialised in Healthcare Products',
    subtitle:'We build best healthcare products!',
    paragraph:'Our expertise is in developing healthcare communication solutions like WhatsApp for doctors and Nurses. We know what compliances will be needed before launching a healthcare app into the market',
    link:'#contact'
  },
  {
    image:require('../../assets/images/hero.png'),
    title:'We are specialised in Healthcare Products',
    subtitle:'We build best healthcare products!',
    paragraph:'Our expertise is in developing healthcare communication solutions like WhatsApp for doctors and Nurses. We know what compliances will be needed before launching a healthcare app into the market',
    link:'#contact'
  }
]
function Banner() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <Carousel className="carousel-inner">
      {bannerData.map((item) => (
        <Carousel.Item interval={1500} >
          <img
            src={item.image}
            className="d-block w-100"
            height="660"
            alt="..."
          />

          <Carousel.Caption className="carousel-caption d-block d-md-block">
            <div className="item header-text">
              <h2>{item.title}</h2>
              <h6>{item.subtitle}</h6>
              <p>{item.paragraph}</p>
              <div className="down-buttons">
                <div className="main-blue-button-hover">
                  <a href={item.link}>Are You Ready?</a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
       
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
