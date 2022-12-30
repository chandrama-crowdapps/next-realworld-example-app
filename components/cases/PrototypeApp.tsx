import React from "react";
import Carousel from "react-grid-carousel";
import ScrollAnimation from "react-animate-on-scroll";
export default function PrototypeApp({ prototypeData }) {
  return (
    <section>
      <div className="our-services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <ScrollAnimation animateIn="flipInX">
                  <span>High-fidility</span>
                  <h2>Prototyping</h2>
                </ScrollAnimation>
                <p>
                  In order to evaluate the design of the application, a
                  prototype is released to enhance precision as inputted by
                  users
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Carousel cols={3} rows={1} gap={4} loop autoplay={2000}>
              {prototypeData.map((item) => (
                <Carousel.Item style={{ marginRight: "0px" }}>
                  <img src={item.prototypeImg} alt="" />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
