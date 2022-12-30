import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import chooseImg from '../../assets/svg/choose-us.svg'
function ChooseUs() {
  return (
    // <!-- Why Choose Us -->
    <div className="choose-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <span data-aos="fade-right" data-aos-duration="3000">
                Why Choose Us
              </span>
              <h2 data-aos="fade-right" data-aos-duration="2000">
                Why Choose Us?
              </h2>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="w-full mt-4">
              <details className="cursor-pointer border-bottom py-2">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 txtRed">
                  We Write Highly Secure Code
                </summary>
                <div className="txtMargin">
                  CrowdApps being a healthcare IT Expert company, we care about
                  security while writing every single line of code. We review
                  our code for security loopholes and follow industry standards
                  to make sure all the writing is highly secure.
                </div>
              </details>
              <details className="cursor-pointer border-bottom py-2">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 txtRed">
                  Performance and Scalable Apps
                </summary>
                <div className="txtMargin">
                  Many companies talk about this but are they actually building
                  scalable infrastructure and writing performant code? Many
                  customers do not know how to test the infrastructure for
                  scalability. At the initial stage all the apps and website
                  have very less number of users on their platform and that can
                  be handled by a basic infrastructure. We at CrowdApps make use
                  of load testing tools to make sure that your app
                  infrastructure scales automatically as the load increases. If
                  your app can scale to handle the increased load its
                  performance will automatically be perfect.
                </div>
              </details>
              <details className="cursor-pointer border-bottom">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 txtRed">
                  Test Driven Development(TDD)
                </summary>

                <div className="txtMargin">
                  <b>
                    We believe in Test Driven Development which is known as
                    ‘TDD’.
                  </b>
                  <ul>
                    <li>
                      TDD reduces the time required for project development
                    </li>
                    <li>Code flexibility and easier maintenance</li>
                    <li>Better program design and higher code quality</li>
                    <li>Detailed project documentation.</li>
                    <li>With TDD you will get a reliable solution</li>
                    <li>Save project costs in the long run.</li>
                  </ul>
                </div>
              </details>
              <details className="cursor-pointer border-bottom py-2">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 txtRed">
                  Manual and Automated Testing
                </summary>

                <div className="txtMargin">
                  We test all the websites and mobile apps developed by us. We
                  perform both Manual and automation testing. 100% automation is
                  not possible all the time and for all the features, therefore,
                  you must get your apps tested manually to verify what was
                  needed and what is developed. We make sure to validate the
                  final digital product before delivering it to our customers.
                </div>
              </details>
              <details className="cursor-pointer border-bottom py-2">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 txtRed">
                  Bug Free Product
                </summary>

                <div className="txtMargin">
                  It's very easy to write but difficult to achieve. We are
                  addicted to testing the product till we discover and fix all
                  the bugs. We offer testing & bug fixing period (varies
                  depending on the product size) to our customers for testing
                  the final product after the delivery and make sure the product
                  is bug free.
                </div>
              </details>
            </div>
          </div>

          <div className="col-lg-5 align-self-center">
            <div className="left-image">
              <img src={chooseImg} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
