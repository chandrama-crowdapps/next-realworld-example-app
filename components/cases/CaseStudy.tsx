import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
export default function CaseStudy(props) {
  return (
    <section className="border-top">
         {/* <!-- Case Study --> */}
    <div className="case-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <span>Case Study</span>
              <h2>{props.title}</h2>
              </ScrollAnimation>
              <p>
                {props.description}
              </p>
              <div className="row">
                <div className="col-lg-4">
                  <div className="fact-item">
                    <div className="count-area-content">
                      <div className="count-title">Client</div>
                      <p>{props.client}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="fact-item">
                    <div className="count-area-content">
                      <div className="count-title">Project</div>
                      <p>{props.project}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="fact-item">
                    <div className="count-area-content">
                      <div className="count-title">Platform</div>
                      <p>{props.platform}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="left-image">
              <img src={props.image} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </section>
  )
}
