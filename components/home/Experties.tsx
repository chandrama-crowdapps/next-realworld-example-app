import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import healthImg from "../../assets/svg/healthapps.svg";
import Carousel from "react-bootstrap/Carousel";
const expertData =[
  {
    image:require('../../assets/svg/healthapps.svg')
  }
]
function Experties() {
  return (
    <div id="services" className="our-experties section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <ScrollAnimation animateIn="flipInX">
                <span data-aos="fade-right" data-aos-duration="3000">
                  Our Experties
                </span>
                <h2 data-aos="fade-right" data-aos-duration="2000">
                  Healthcare Apps
                </h2>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <center>
              <Carousel className="d-flex justify-content-center">
                <Carousel.Item interval={1500} className="align-self-center">
                  <img
                    src={healthImg}
                    alt=""
                    className="d-block img-fluid align-self-center"
                    style={{ width: "540px", float: "center" }}
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    src={healthImg}
                    alt=""
                    className="d-block img-fluid align-self-center"
                    style={{ width: "540px" }}
                  />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    src={healthImg}
                    alt=""
                    className="d-block img-fluid align-self-center"
                    style={{ width: "540px" }}
                  />
                </Carousel.Item>
              </Carousel>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experties;
