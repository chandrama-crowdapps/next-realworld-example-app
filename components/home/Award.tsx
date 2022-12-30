import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import awardImg1 from '../../assets/svg/awards1.svg'
import awardImg2 from '../../assets/svg/awards2.svg'
function Award() {
  return (
    <div id="portfolio" className="our-portfolio section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <span data-aos="fade-right" data-aos-duration="3000">
                Awards
              </span>
              <h2 data-aos="fade-right" data-aos-duration="2000">
                Recognitions and Awards
              </h2>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                Our mobile app development experts have designed and delivered
                cutting-edge, bespoke solutions for all unique business
                requirements across a wide range of industries we serve.
              </p>
              </ScrollAnimation>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 align-self-center">
            <div className="left-image">
              <img
                src={awardImg1}
                className="img-fluid"
                alt="Awards"
              />
            </div>
          </div>
          <div className="col-lg-9 col-12 ">
            <div className="">
              <iframe width="100%" height="800px" src="https://widget.clutch.co/widgets/get/4?ref_domain=crowdapps.in&uid=1720002&ref_path=/" scrolling="no"
              title="[iFrameSizer]iframe-0.6279990025016882:729:940:transitionend4"/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Award;
