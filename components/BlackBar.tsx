import React from "react";
import dotBlack from "../assets/svg/black-dot.svg"
function BlackBar() {
  return (
    <section>
      <div className="subscribe-left-dec">
        <img src={dotBlack} alt="" />
      </div>
      <div id="subscribe" className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="inner-content">
                <h2>Have an app idea but wondering how much would it cost?</h2>
                <p>
                  Shrug off all your worries and get in touch with us for a free
                  quote.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="button-subscribe">
                <div className="main-button-border">
                  <a href="#">Get a Free Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlackBar;
