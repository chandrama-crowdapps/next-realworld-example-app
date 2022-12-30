import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default function PrototypePannel({ prototypeData }) {
    console.log("prototype",prototypeData);
  return (
    <section>
      <div className="our-services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <ScrollAnimation animateIn="flipInX">
                  <span>High-fidility</span>
                  <h2>Prototyping</h2>
                </ScrollAnimation>
                <p>
                  In order to evaluate the design of the application, a
                  prototype is released to enhance precision as inputted by
                  users
                </p>
              </div>
            </div>
          </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
                {prototypeData.map((item)=>(
                    <img src={item.prototypeImg} alt="" style={{width:'100%'}} />
                ))}
              
            </div>
          </div>
        
      </div>
    </section>
  );
}
