import React from 'react'
import LetsTalk from '../home/LetsTalk'
export default function contactUs() {
  return (
    <section>
        <div className="contact-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="inner-content">
              <h2>Contact Us</h2>
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
    <LetsTalk/>
    </section>
  )
}
