import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import arrow from "../../assets/img/arrow.png"
const servicesData =[
  {
    image:require('../../assets/img/app.png'),
    title:'App Development',
    detail:"The number of mobile users today is greater than the number of desktop users, therefore, It's not a secret anymore that mobile apps are the future. Our talented and skilled team of app experts produce bespoke mobile apps for businesses and organizations. Whatever, your app needs may be we pack the experience and expertise to deliver a world-className product that will strengthen your business idea.",
  },
  {
    image:require('../../assets/img/web.png'),
    title:'Web Development',
    detail:"We use different web technologies to build slick, responsive web applications for you and your users. CrowdApps can build a bespoke web application that makes your business even better. Having an in-house team of designers and developers helps us have full control over our work and results.",
  },
  {
    image:require('../../assets/img/ui.png'),
    title:'UI/UX Design',
    detail:"Got a great business idea, but not sure how to turn it into a digital reality? We’ll help you design useful products that solve problems, walking you through the process from start to finish. We will help you in creating an amazing user interface keeping in mind that your users should be able to navigate through your online venture with a minimal amount of fuss and hassle. We test all the websites and mobile apps developed by us. We perform both Manual and automation testing.",
  },
  {
    image:require('../../assets/img/qa.png'),
    title:'QA & Testing',
    detail:"CrowdApps team of Q/A and testers mitigate our client's business risk with the help of our quality assured frameworks and methodologies. We test all the websites and mobile apps developed by us. We perform both Manual and automation testing. 100% automation is not possible all the time and for all the features, therefore, you must get your apps tested manually to verify what was needed and what is developed. We make sure to validate the final digital product before delivering it to our customers.",
  },
  {
    image:require('../../assets/img/digital.png'),
    title:'Digital Marketing',
    detail:"As a trusted digital marketing agency in Australia and the United States, we consider generating growth through marketing strategies our utmost responsibility. Our team of digital marketing maestros is dedicated to achieving clear, genuine, and maximum returns on your marketing investments whilst providing world-class customer service.",
  },
  {
    image:require('../../assets/img/cyber.png'),
    title:'Cyber Security',
    detail:"Web, mobile and API-based applications are increasingly the targets of automated bot attack campaigns that are cheap and easy to launch. The latest of these are advanced bot threats (ABTs) that exploit vulnerabilities in application business logic to take over user accounts, create fake accounts, scrape content and perform denial-of-service attacks. This causes negative user experiences and increases fraud resolution and web infrastructure costs. We at CrowdApps make sure that the digital solutions we develop are highly secure and protected from all kind of cyber attacks.",
  }
]
function Services() {
  return (
    <div id="services" className="our-services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <ScrollAnimation animateIn="flipInX">
                <span data-aos="fade-right" data-aos-duration="3000">
                  Services
                </span>
                <h2 data-aos="fade-right" data-aos-duration="2000">
                  What do <br />
                  we provide ?
                </h2>
              </ScrollAnimation>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-heading">
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <p
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled .
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row">
        {servicesData.map((item) => (
          <div className="col-lg-4">
            <ScrollAnimation animateIn="zoomIn">
            <div
              className="item"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              
                <div className="icon">
                  <img src={item.image} alt="" />
                </div>
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
                {/* <span className="">
                  <img src={arrow}/>
                </span> */}
              
            </div>
            </ScrollAnimation>
          </div>
          
        ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
