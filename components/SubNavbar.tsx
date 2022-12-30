import React from "react";
import logo2 from '../assets/svg/logo2.svg'
export default function SubNavbar() {
  return (
    <section>
      <div
        className="sub-header-area header-sticky wow slideInDown "
        data-wow-duration="0.75s"
        data-wow-delay="0s"
       
      >
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <nav className="main-navbar">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="/" className="logo">
                  <img src={logo2} />
                </a>
                {/* <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="/">Home</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/career">Our Services</a>
                  </li>
                  <li className="scroll-to-section submenu">
                    <a href="#">About Us</a>
                    <ul>
                      <li>
                        <a href="/ourteam">Our Teams</a>
                      </li>
                      <li>
                        <a href="/career">Careers</a>
                      </li>
                      <li>
                        <a active href="/blog">Blogs</a>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#">Our Experties</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/portfolio" >Portfolio</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/contactUs">Contact Us</a>
                  </li>
                  <li className="scroll-to-section">
                    <div className="main-red-button-hover ">
                      <a href="#contact" style={{color: "white"}}>
                        Got An Idea?
                      </a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger" style={{color:'red'}}>
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
