import React from 'react'
import fontImg from "../../assets/img/font.png";
import ScrollAnimation from "react-animate-on-scroll";
export default function DesignDetail({designData}) {
  console.log("designData",designData);
  return (
    <section>
      <div className="our-design-color section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="section-heading">
              <ScrollAnimation animateIn="flipInX">
                <span>Design</span>
                <h2>Visual Identity</h2>
                </ScrollAnimation>
                <p>
                  {designData.identity}
                </p>
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
              {designData.color_plate.map((item)=>(
              <div className="col-lg-2">
                <div
                  className="border-2 color-box rounded"
                  style={{ backgroundColor: item.color }}
                ></div>
                <p>{item.color}</p>
              </div>
              ))}
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
              <img src={fontImg} />
            </div>
            <div className="col-lg-8">
              <h3>
                {designData.typography.fontName} <span>{designData.typography.subFont}</span>
              </h3>
              <h4>{designData.typography.fontTitle}</h4>
              <p className="font-paragraph">{designData.typography.fontPara}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
