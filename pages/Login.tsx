import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import talk1 from "../assets/svg/call.svg"
import talk2 from "../assets/svg/mail.svg"
import talk3 from "../assets/svg/location.svg"
import bg1 from '../assets/images/ellipse2.png'
import bg2 from '../assets/images/ellipse1.png'
import SubNavbar from '../components/SubNavbar'
export default function Login() {
  return (
    <section>
        <SubNavbar/>
           <div className="contact-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="inner-content">
              <h2>Login</h2>
              <p>
                Have a question or just want to say hi? We’d love to hear from
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- contact us --> */}
    <div id="contact" className="contact-us section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="section-heading">
          <ScrollAnimation animateIn="flipInX">
            <h2 data-aos="fade-right" data-aos-duration="2000">Let's Talk</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h6
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              Discuss your vision or scale up your <br />
              entrepreneurial journey. We are only this form away.
            </h6>

            <div
              className="info"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <span
                ><i className=""> <img src={talk1} /></i>
                <p>Phone</p>
                <h6>+91-9555508100</h6>
              </span>
              <span>
                <i className=""><img src={talk2} /></i>
                <p>Email</p>
                <h6>contact@crowdapps.in</h6>
              </span>
             
            </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="col-lg-5 align-self-center">
          <form id="contact">
            <div className="row">
              <div className="section-heading">
                <h5>Login</h5>
              </div>
              

              <div className="col-lg-12">
                <fieldset>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    placeholder="Your Email"
                    required=""
                  />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    required=""
                  />
                </fieldset>
              </div>
              
              <div className="col-lg-12">
                <fieldset>
                  <button  type="submit" id="form-submit" className="main-button">
                    Login
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
   
     
      <div className="contact-dec">
      <img src={bg1} alt=""/>
    </div>
    <div className="contact-left-dec">
      <img src={bg2} alt=""/>
    </div>

  </div>
    </section>
  )
}
