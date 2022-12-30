import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
export default function OurProcess() {
  return (
    <section>
      <div className="our-process section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
              <ScrollAnimation animateIn="flipInX">
                <span style={{color:'white'}}>Process</span>
                <h2>Our Process</h2>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="item">
                <div className="about">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <h4>Conceptualization</h4>

                <p>Market understanding Competitive Analysis User Interview</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="about">
                  <i className="fa fa-user fa-2x"></i>
                </div>
                <h4>Design</h4>

                <p>User flow journey Mapping Wireframing</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="about">
                  <i className="fa fa-cubes fa-2x"></i>
                </div>
                <h4>Development</h4>

                <p>Android, iOS Development User Testing</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <div className="about">
                  <i className="fa fa-building fa-2x"></i>
                </div>
                <h4>Deployment</h4>

                <p>
                  App store and play store Deployment, Post-launch Maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
