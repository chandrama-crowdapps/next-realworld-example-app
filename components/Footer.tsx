import React from "react";
import footerLogo from "../assets/svg/Crowd-Apps.svg"
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="logo">
              <a href="#">
                <img
                  src={footerLogo}
                  alt="logo"
                  style={{width: "250px"}}
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 align-self-right">
            <div className="subscribe-newsletters footer-item">
              <div className="main-red-button-hover">
                <a href="#contact">Start Project with us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 border-right">
            <div className="community footer-item">
              <h4>Menu</h4>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">Website Checkup</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
            <div className="about footer-item">
              <a href="#">Follow us on:</a>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 border-right">
            <div className="services footer-item">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">HealthCare Apps Development</a>
                </li>
                <li>
                  <a href="#">Mobile Apps Development</a>
                </li>
                <li>
                  <a href="#">Website Development</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Cyber Security</a>
                </li>
                <li>
                  <a href="#">QA/Testing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 border-right">
            <div className="community footer-item">
              <h4>Technologies</h4>
              <ul>
                <li>
                  <a href="#">Reactjs</a>
                </li>
                <li>
                  <a href="#">React Native</a>
                </li>
                <li>
                  <a href="#">Nodejs</a>
                </li>
                <li>
                  <a href="#">Vuejs</a>
                </li>
                <li>
                  <a href="#">HTML5</a>
                </li>
                <li>
                  <a href="#">PHP</a>
                </li>
                <li>
                  <a href="#">WordPress</a>
                </li>
                <li>
                  <a href="#">JAVA</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footer-item">
              <h4>Contact Us</h4>
              <h6>Phone</h6>
              <p>+91 9556508100</p>
              <h6>Email</h6>
              <p>contact@crowdapps.in</p>
              <h6>Office Address</h6>
              <p>
                221, 2nd Floor, JMD Megapolis, Sohna Road, Sector 48, Gurgaon,
                Haryana 122018 IN
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="copyright">
              <p>2022 Copyright Reserved CrowdApps</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
