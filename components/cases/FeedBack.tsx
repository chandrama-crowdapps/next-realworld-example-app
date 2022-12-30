import React from 'react'
import caseLogo from '../../assets/svg/Home-Health-Logo.svg'
import quote from '../../assets/svg/quote.svg'
import ScrollAnimation from "react-animate-on-scroll";
import Carousel from "react-bootstrap/Carousel";
export default function FeedBack({feedbackData}) {
    console.log(feedbackData);
  return (
    <section>
        
    <div className="testimonials section">
      <div className="container">
        <div className="services-left-dec">
          <img src={quote} alt="" />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              {/* <span>Testimonials</span> */}
              <h2>Client Feedback</h2>
             </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <Carousel>
            {feedbackData.map((item) => (
              <Carousel.Item interval={1500} >
                <div className="icon">
                  <img src={item.logo} />
                </div>

                <div className="testimonials-info">
                  <span className="testimonials-name">Founder - {item.client_name}</span>
                  <span className="testimonials-review">{item.client_position}</span>
                </div>
                <p>
                  {item.feedback}
                </p>
              </Carousel.Item>
              
            ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    
    </section>
  )
}
