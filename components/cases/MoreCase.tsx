import React from "react";
import Carousel from "react-grid-carousel";
import ScrollAnimation from "react-animate-on-scroll";
export default function MoreCase() {
  const caseData = [
    {
      image: require("../../assets/img/p1.png"),
      title: "Home Health",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/homeHealthCase",
    },
    {
      image: require("../../assets/img/p2.png"),
      title: "My Fitness Minder",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/fwiAppCase",
    },
    {
      image: require("../../assets/img/p3.png"),
      title: "Receipt Minder",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/receiptMinderAppCase",
    },
    {
      image: require("../../assets/img/p4.png"),
      title: "Lifeline Laboratory",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/lifeLineCase",
    },
    {
      image: require("../../assets/img/p5.png"),
      title: "Receipt Minder",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/receiptMinderWebCase",
    },
    {
      image: require("../../assets/img/p6.png"),
      title: "My Fitness Minder",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/fwiWebCase",
    },
    {
      image: require("../../assets/img/p7.png"),
      title: "Projectlife-COVID App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/projectLifeCase",
    },
    {
      image: require("../../assets/img/p8.png"),
      title: "Labour Care Guide",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/lcgAppCase",
    },
    {
      image: require("../../assets/img/p9.png"),
      title: "Labour Care Guide Web",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/lcgWebAppCase",
    },
    {
      image: require("../../assets/img/p10.png"),
      title: "Smarten Web",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/smartenCase",
    },
    {
      image: require("../../assets/img/p11.png"),
      title: "VloSum App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/vlosumCase",
    },
    {
      image: require("../../assets/img/p12.png"),
      title: "Vehicle Care App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/vehicleCase",
    },
    {
      image: require("../../assets/img/petrolpump_web.png"),
      title: "Petrol Pump Management",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/petrolpump",
    },
    {
      image: require("../../assets/img/4cast_web.png"),
      title: "4Cast App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/fourcastApp",
    },
    {
      image: require("../../assets/img/bedbureau_web.png"),
      title: "Bed Bureau Management",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/bedbureau",
    },
    {
      image: require("../../assets/img/curebee_web.png"),
      title: "The Cure Bee",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/curebee",
    },
    {
      image: require("../../assets/img/iplant_web.png"),
      title: "iPlant: Cafe & Lounge",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/iplant",
    },
    {
      image: require("../../assets/img/wellsoon_web.png"),
      title: "Get well soon",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/getwellsoon",
    },
  ];
  return (
    <section>
      <div className="choose-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
              <ScrollAnimation animateIn="flipInX">
                <h2>More Case Studies</h2>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-banner">
          <div className="container">
            <div className="row">
              <Carousel cols={2} rows={1} gap={16} loop autoplay={2000}>
                {caseData.map((item) => (
                  <Carousel.Item >
                      <img src={item.image} />
                      <div className="section-heading">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                      <div className="link">
                        <a href={item.link}>View Case Study </a>
                      </div>
                   
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
