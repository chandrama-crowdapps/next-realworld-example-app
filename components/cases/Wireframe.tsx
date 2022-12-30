import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default function Wireframe({ wireframeData }) {
  return (
    <section>
      <div className="our-wirefram section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
              <ScrollAnimation animateIn="flipInX">
                <span>low-fidility</span>
                <h2>Wireframing</h2>
                </ScrollAnimation>
                <p>
                  The skeletal framework of the hassle free fuel procurement
                  application with its screen flows.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {wireframeData.map((item) => (
              <div className="col-lg-3 align-self-center">
                <div className="item">
                  <img
                    src={item.wireframeImg}
                    className="img-fluid w-100"
                    alt="Awards"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
