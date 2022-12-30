import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
export default function ProjectGoal(props) {
  return (
    <section>
        <div className="case-project section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-self-center">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <span>Goal</span>
              <h2>Project Goals</h2>
              </ScrollAnimation>
              <p>
                {props.para}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
