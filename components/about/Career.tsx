import React, { useState } from "react";
import RedBar from "../RedBar";
import Hero from "../../assets/img/career.png";
import icon1 from "../../assets/img/learn.png";
import icon2 from "../../assets/img/wfh.png";
import icon3 from "../../assets/img/clock.png";
import icon4 from "../../assets/img/calendar.png";
import icon5 from "../../assets/img/trophy.png";
import icon6 from "../../assets/img/united.png";
import ScrollAnimation from "react-animate-on-scroll";
import AccordionPage from "../AccordionPage";
export default function Career() {
  const accordionData =[
    {
      title:'iOS Developer',
      type:'(Fulltime, Remote)',
      content:'CrowdApps being a healthcare IT Expert company, we care about security while writing every single line of code. We review our code for security loopholes and follow industry standards to make sure all the writing is highly secure.'
    }
  ]
  const [isActive, setIsActive] = useState(false);
  return (
    <section>
      <div className="pricing-tables">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
              <ScrollAnimation animateIn="flipInX">
                <h2>Join our Tribe</h2>
                </ScrollAnimation>
                <p>Be a part of the fastest growing IT company</p>
                <div className="main-red-button-hover">
                  <a href="#contact">Got An Idea?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="career-banner offset-lg-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img src={Hero} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Counter -->
    <!-- Red Bar --> */}
      <div className="container">
     
        <RedBar />
      </div>
   
      <div className="our-works section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
              <ScrollAnimation animateIn="flipInX">
                <h2>Why work at Crowdapps?</h2>
                <p>What it is like to be part of Crowdapps?</p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="item">
                <div className="about">
                  <img src={icon1} />
                </div>
                <h4>Learn & Grow</h4>

                <p>
                  We work in groups to be Pioneers and hit great milestones.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="about">
                  <img src={icon2} />
                </div>
                <h4>Work from home</h4>

                <p>
                  We encourage employees to work in the most productive forms
                  from their preferred locations.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="about">
                  <img src={icon3} />
                </div>
                <h4>Flexible working hours</h4>

                <p>
                  We offer latitude of time flexibility and allow employees to
                  work within agreed limits set by management.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="about">
                  <img src={icon4} />
                </div>
                <h4>5 Working Days</h4>

                <p>
                  Because we believe in work-life balance. Work is important but
                  so is everyone's sanity.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="about">
                  <img src={icon5} />
                </div>
                <h4>Performance Award</h4>

                <p>
                  Get awarded for better performance every 6 months and be
                  recognized
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="about">
                  <img src={icon6} />
                </div>
                <h4>Great Co-Workers</h4>

                <p>
                  Work with some of the best talent in the industry and build
                  strong networks with them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Works -->
    <!-- Why Choose Us --> */}
      <div className="portfolio-position section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
              <ScrollAnimation animateIn="flipInX">
                {/* <!-- <span>Why Choose Us</span> --> */}
                <h2>Open Positions</h2>
                <p>Let’s build something awesome together</p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label className="form-label">Search</label>
              <input type="text" className="form-control" name="search" />
            </div>
            <div className="col-lg-6">
              <label className="form-label">Departments</label>
              <select className="form-select" name="select-list">
                <option>All Departments</option>
                <option>Web Development</option>
                <option>Android Development</option>
                <option>Software</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
            <AccordionPage/>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
