import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/svg/Crowd-Apps.svg";
import  { useState } from "react"
function Navbar() {
  const [notShowMenu, setBurgerMenu] = useState(false);

  const showMenu =()=>{
    setBurgerMenu(!notShowMenu)
  }
  return (
    <header
      className="header-area wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}
              <a href="/" className="logo">
                <img src={logo} />
              </a>
              {/* <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** --> */}
              <ul className={`nav ${notShowMenu ? 'd-none': 'd-block'}`}>
                <li className="scroll-to-section">
                  <a href="/" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#">Our Services</a>
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
                      <a href="/blog">Blogs</a>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <a href="#">Our Experties</a>
                </li>
                <li className="scroll-to-section">
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li className="scroll-to-section">
                  <a href="/contactUs">Contact Us</a>
                </li>
                <li className="scroll-to-section">
                  <div className="main-red-button-hover">
                    <Link to="#contact">Got An Idea?</Link>
                  </div>
                </li>
              </ul>

              <a className="menu-trigger" onClick={showMenu}>
              
                <span>Menu</span>
              </a>
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
    
    
  );
  
}

export default Navbar;
