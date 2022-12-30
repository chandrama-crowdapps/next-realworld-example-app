import React from "react";
import Carousel from "react-grid-carousel";
import ScrollAnimation from "react-animate-on-scroll";
export default function SimilarBog() {
    const similarBlogData=[
        {
            image:require('../../assets/images/blog1.png'),
            field:'Technology',
            title:'5 Essential FREE Tools for Remote Teams',
            date:'February 12, 2022'
        },
        {
            image:require('../../assets/images/blog2.png'),
            field:'Technology',
            title:'Product Design Lessons To Learn From The Ancient',
            date:'February 12, 2022'
        },
        {
            image:require('../../assets/images/blog3.png'),
            field:'Technology',
            title:'5 Essential FREE Tools for Remote Teams',
            date:'February 12, 2022'
        }
    ]
  return (
    <section>
      <div className="choose-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
              <ScrollAnimation animateIn="flipInX">
                <h2>View Similar Blog</h2>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-banner">
          <div className="container">
            <div className="row">
              <Carousel cols={3} rows={1} gap={16} loop autoplay={2000}>
                {similarBlogData.map((item) => (
                  <Carousel.Item >
                      <img src={item.image} />
                      <div className="section-heading mt-2">
                        <p className="font-weight-bold">{item.field}</p>
                        <h4 className="-mt-3">{item.title}</h4>
                        <p className="font-weight-bold">{item.date}</p>
                      </div>
                      
                   
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
