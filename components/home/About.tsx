import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import aboutImg from "../../assets/svg/about-crowdapps.svg";
function About() {
  return (
    <div className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
              <ScrollAnimation animateIn="flipInX">
                <span data-aos="fade-right" data-aos-duration="3000">
                  About Us
                </span>
                <h2 data-aos="fade-right" data-aos-duration="2000">
                  About CrowdApps
                </h2>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="left-image">
              <img src={aboutImg} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-heading">
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  We are a team of highly skilled IT professionals who are
                  passionate about technology and thrive to produce digital
                  products that are useful, scalable, innovative, and
                  successful. We are a Web & Mobile Apps development company
                  providing services to our clients across the globe. Web
                  Development, Mobile Application Development, Digital
                  Marketing, and Cyber Security are all the areas in which we
                  help our clients succeed.
                </p>
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  Apart from the services mentioned above, we have excelled in
                  developing many Healthcare/Medical applications.
                </p>
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  What differs us from others is our policy to write
                  high-quality code that is Secure, Scalable, and Maintainable.
                  We have a hunger to build life-long professional relationships
                  and deliver world-className products in state-of-the-art
                  technologies. At CrowdApps, perfection is not just a word, it
                  is a way of living we have become addicted to.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
