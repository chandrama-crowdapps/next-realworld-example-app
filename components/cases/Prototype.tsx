import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default function Prototype({ prototypeData }) {
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
                <p>In order to evaluate the design of the application, a prototype is released to enhance precision as inputted by users</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                id="carouselMultiItemExample"
                className="carousel slide carousel-dark text-center"
                data-mdb-ride="carousel"
              >
                <div className="carousel-inner py-4">
                  <div className="carousel-item active">
                    <div className="row">
                      {prototypeData.map((item) => (
                        <div className="col-lg-10 offset-lg-1">
                          <div className="icon">
                            <img src={item.prototypeImg} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
