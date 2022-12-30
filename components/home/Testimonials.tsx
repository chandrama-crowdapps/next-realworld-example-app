import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import test1 from "../../assets/svg/quote.svg";
import test2 from "../../assets/svg/Home-Health-Logo.svg";
import star from "../../assets/img/review_star.png"
import Carousel from "react-bootstrap/Carousel";
function Testimonials() {
  return (
    <div className="testimonials section">
      <div className="container">
        <div className="services-left-dec">
          <img src={test1} alt="" />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <span data-aos="fade-right" data-aos-duration="3000">
                Testimonials
              </span>
              <h2 data-aos="fade-right" data-aos-duration="2000">
                What our client says
              </h2>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <Carousel>
              <Carousel.Item interval={1500} >
                <div className="icon">
                  <img src={test2} />
                </div>

                <div className="testimonials-info">
                  <span className="testimonials-name">Founder - John P</span>
                  <span className="testimonials-review"><img src={star}/></span>
                </div>
                <p>
                  They were fantactic in developing the react native foundation
                  for the mobile side of our product. Not only were they quick
                  to respond, but their code base is proving to be extremely
                  solid. They have been great at explaining what it was they
                  have been doing and interpreting the end results that we
                  needed. I can't quite believe my luck in finding them, I 100%
                  plan to use them again in the future.
                </p>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <div className="icon">
                  <img src={test2} />
                </div>

                <div className="testimonials-info">
                  <span className="testimonials-name">Founder - John P</span>
                  <span className="testimonials-review"><img src={star}/></span>
                </div>
                <p>
                  They were fantactic in developing the react native foundation
                  for the mobile side of our product. Not only were they quick
                  to respond, but their code base is proving to be extremely
                  solid. They have been great at explaining what it was they
                  have been doing and interpreting the end results that we
                  needed. I can't quite believe my luck in finding them, I 100%
                  plan to use them again in the future.
                </p>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
