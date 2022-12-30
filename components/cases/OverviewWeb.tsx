import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import Carousel from "react-bootstrap/Carousel";
export default function Overview({overviewData}) {
  console.log("overviewData",overviewData);
  return (
    <section>
      <div className="case-project section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-self-center">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <span>Overview</span>
              <h2>Project Overview</h2>
              </ScrollAnimation>
              <p>
                {overviewData.para1}
              </p>
              <p>
                {overviewData.para2}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="item">
              <div className="icon">
              
                <Carousel className="d-flex justify-content-center">
                  {overviewData.images.map((item)=>(
                    <Carousel.Item interval={1500} >
                    <img
                      src={item.img}
                      alt=""
                      className="d-block img-fluid "
                      style={{  float:"center" }}
                    />
                  </Carousel.Item>
                  ))}
          </Carousel>
          </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
