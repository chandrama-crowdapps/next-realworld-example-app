import React from 'react'
import SubNavbar from '../components/SubNavbar'
import wireFrame1 from '../assets/svg/f1.svg'
import wireFrame2 from '../assets/svg/f2.svg'
import wireFrame3 from '../assets/svg/f3.svg'
import wireFrame4 from '../assets/svg/f4.svg'
import wireFrame5 from '../assets/svg/f5.svg'
import wireFrame6 from '../assets/svg/f6.svg'
import wireFrame7 from '../assets/svg/f7.svg'
import wireFrame8 from '../assets/svg/f8.svg'
import wireFrame9 from '../assets/svg/f9.svg'
import wireFrame10 from '../assets/svg/f10.svg'
import wireFrame11 from '../assets/svg/f11.svg'
import wireFrame12 from '../assets/svg/f12.svg'
import caseStudyImg from '../assets/caseStudy/Rm/caseStudy.png'
import caseLogo from '../assets/caseStudy/Rm/logo.png'
import quote from '../assets/svg/quote.svg'
import projectOverview from '../assets/caseStudy/Rm/rm-mobile.png'
import fontImg from '../assets/img/font.png'
import moreCase1 from '../assets/img/p1.png'
import moreCase2 from '../assets/img/p2.png'
import prototype1 from '../assets/caseStudy/Rm/pr1.png'
import prototype2 from '../assets/caseStudy/Rm/pr2.png'
import prototype3 from '../assets/caseStudy/Rm/pr3.png'
import prototype4 from '../assets/caseStudy/Rm/pr4.png'
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";
export default function RmAppCase() {
  return (
    <section>
      <SubNavbar/>
      {/* <!-- Case Study --> */}
    <div className="case-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
              <span>Case Study</span>
              <h2>Receipts Minder</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled .
              </p>
              <div className="row">
                <div className="col-lg-4">
                  <div className="fact-item">
                    <div className="count-area-content">
                      <div className="count-title">Client</div>
                      <p>Home Health</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="fact-item">
                    <div className="count-area-content">
                      <div className="count-title">Project</div>
                      <p>Home Health</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="fact-item">
                    <div className="count-area-content">
                      <div className="count-title">Platform</div>
                      <p>Application</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="left-image">
              <img src={caseStudyImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>  
      </div>
    </div>
    {/* <!-- Testimonial -->
    <!-- Testimonial --> */}
    <div className="testimonials section">
      <div className="container">
        <div className="services-left-dec">
          <img src={quote} alt="" />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              {/* <span>Testimonials</span> */}
              <h2>Client Feedback</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <Carousel>
              <Carousel.Item interval={1500} >
                <div className="icon">
                  <img src={caseLogo} />
                </div>
                <div className="testimonials-info">
                  <span className="testimonials-name">Founder - John P</span>
                  <span className="testimonials-review">xxx</span>
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
                  <img src={caseLogo} />
                </div>
                <div className="testimonials-info">
                  <span className="testimonials-name">Founder - John P</span>
                  <span className="testimonials-review">xxx</span>
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
    {/* <!-- Testimonial -->
    <!-- Testimonial -->
    <!-- Project OverView --> */}
    <div className="case-project section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-self-center">
            <div className="section-heading">
              <span>Overview</span>
              <h2>Project Overview</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-3">
            <div className="item">
              <div className="icon">
              
                <Carousel className="d-flex justify-content-center">
          <Carousel.Item interval={1500} className="align-self-center">
                <img
                  src={projectOverview}
                  alt=""
                  className="d-block img-fluid align-self-center"
                  style={{  float:"center" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={projectOverview}
                  alt=""
                  className="d-block img-fluid align-self-center"
                  style={{  }}
                />
                </Carousel.Item>
             <Carousel.Item interval={500}>
                <img
                  src={projectOverview}
                  alt=""
                  className="d-block img-fluid align-self-center"
                  style={{  }}
                />
                </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Project Goal --> */}
    <div className="case-project section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-self-center">
            <div className="section-heading">
              <span>Goal</span>
              <h2>Project Goals</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Works --> */}
    <div className="our-process section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <span>Process</span>
              <h2>Our Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item">
              <div className="about">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <h4>Conceptualization</h4>

              <p>Market understanding Competitive Analysis User Interview</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <div className="about">
                <i className="fa fa-user fa-2x"></i>
              </div>
              <h4>Design</h4>

              <p>User flow journey Mapping Wireframing</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <div className="about">
                <i className="fa fa-cubes fa-2x"></i>
              </div>
              <h4>Development</h4>

              <p>Android, iOS Development User Testing</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item">
              <div className="about">
                <i className="fa fa-building fa-2x"></i>
              </div>
              <h4>Deployment</h4>

              <p>
                App store and play store Deployment, Post-launch Maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Works --> */}

    <div className="our-wirefram section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <span>low-fidility</span>
              <h2>Wireframing</h2>
              <p>
                The skeletal framework of the hassle free fuel procurement
                application with its screen flows.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame1} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame2} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame3} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame4} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame5} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame6} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame7} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame8} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame9} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame10} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame11} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="item">
              <img src={wireFrame12} className="img-fluid w-100" alt="Awards" />
            </div>
          </div>
        </div>
      </div>
    </div>
{/* <!-- Our Technology --> */}

<div className="our-design-color section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 ">
        <div className="section-heading">
          <span>Design</span>
          <h2>Visual Identity</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 ">
        <div className="section-heading">
          
          <h2>Colour Palette</h2>
          </div>
      </div>
    </div>
    <div className="row ">
     
      <div className="col-lg-7 tech-color justify-content-center">
        
        <div className="col-lg-2">
          <div className="border-2 color-box rounded" style={{backgroundColor:'#5FD3A3'}}></div>
          <p>#5FD3A3</p>
        </div>
        <div className="col-lg-2">
          <div className="border-2  color-box rounded" style={{backgroundColor:'#00254D'}}></div>
          <p>#00254D</p>
        </div>
        <div className="col-lg-2">
          <div className="border-2  color-box rounded" style={{backgroundColor:'#C2D8F1'}}></div>
          <p>#C2D8F1</p>
        </div>
        <div className="col-lg-2">
          <div className="border-2  color-box rounded" style={{backgroundColor:'#D4F1D9'}}></div>
          <p>#D4F1D9</p>
        </div>
        <div className="col-lg-2">
          <div className="border-2  color-box rounded" style={{backgroundColor:'#D0F3F2'}}></div>
          <p>#D0F3F2</p>
        </div>
       
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 ">
        <div className="section-heading">     
          <h2>Typography</h2>
          </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <img src={fontImg}/>
      </div>
      <div className="col-lg-8">
        <h3>Poppins <span>(Regular, Medium, Bold)</span></h3>
        <h4>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h4>
        <p className="font-paragraph">abcdefghijklmnopqrstuvwxyz</p>
      </div>
    </div>
  </div>
</div>

{/* <!-- Our Technology -->
    <!-- Prototype --> */}
    <div className="our-services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h2>We Provide The Best Service With</h2>
              <span>Our Services</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              id="carouselMultiItemExample"
              className="carousel slide carousel-dark text-center"
              data-mdb-ride="carousel"
            >
              <div className="carousel-inner py-4">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="icon">
                        <img src={prototype1} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                      <div className="icon">
                        <img src={prototype2} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                      <div className="icon">
                        <img src={prototype3} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                      <div className="icon">
                        <img src={prototype4} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                      <div className="icon">
                        <img src={prototype1} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                      <div className="icon">
                        <img src={prototype2} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                      <div className="icon">
                        <img src={prototype3} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                      <div className="icon">
                        <img src={prototype4} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Prototype --> */}

    {/* <!-- Why Choose Us --> */}
    <div className="choose-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
              <h2>More Case Studies</h2>
            </div>
          </div>
        </div>
       
      </div>
      <div className="portfolio-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="item">
                <img src={moreCase1} />
                <div className="section-heading">
                  <h4>Home Health</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div className="link">
                  <a href="casestudy.html">View Case Study </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="item">
                <img src={moreCase2} />
                <div className="section-heading">
                  <h4>My Fitness Minder</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div className="link">
                  <a href="casestudy.html">View Case Study </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </section>
  )
}