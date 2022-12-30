import React from 'react'
import img1 from '../assets/svg/global.svg'
import img2 from '../assets/svg/user1.svg'
import img3 from '../assets/svg/bag.svg'
import CountUp from 'react-countup';
function RedBar() {
  return (
    <div id="subscribe" className="red-subscribe">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 red-img">
            <img src={img1} />
            <div className="inner-content">
              <h2><CountUp start={0} end={50} duration={2.75} delay={0} enableScrollSpy />+</h2>
              <p>Global Clients</p>
            </div>
          </div>
          <div className="col-lg-4 red-img">
            <img src={img2} />
            <div className="inner-content">
              <h2><CountUp start={0} end={25} duration={2.75} delay={0} enableScrollSpy  />+</h2>
              <p>Projects Done</p>
            </div>
          </div>
          <div className="col-lg-4 red-img">
            <img src={img3} />
            <div className="inner-content">
              <h2><CountUp start={0} end={8} duration={2.75} delay={0} enableScrollSpy  />+</h2>
              <p>Years in Business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RedBar