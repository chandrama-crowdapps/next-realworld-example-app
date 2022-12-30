import React from 'react'
import logo2 from '../../assets/svg/logo2.svg'
export default function AdminHeader() {
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
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/services">Services</a>
                  </li>
                  
                  <li className="scroll-to-section">
                    <a href="/team-list">Our Teams</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/portfolio-list" >Portfolio</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/blogs-list">Blogs</a>
                  </li>
                  <li className="scroll-to-section">
                    <div className="main-red-button-hover ">
                      <a href="#contact" style={{color: "white"}}>
                        Logout
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
  )
}
