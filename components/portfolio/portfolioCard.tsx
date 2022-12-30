import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default function portfolioCard() {
  const portfolioData = [
    {
      image: require('../../assets/img/p1.png'),
      title: "Home Health",
      desc: "This app is helping a large number of patients globally who want to connect digitally with their concerned doctors, track their health condition and medication..",
      link: "/homeHealthCase",
    },
    {
      image: require('../../assets/img/p2.png'),
      title: "My Fitness Minder",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/fwiAppCase",
    },
    {
      image: require('../../assets/img/p3.png'),
      title: "Receipt Minder",
      desc: "A secure and intelligent platform for managing receipts digitally to help businesses and customers engage efficiently while making a positive impact on the environment.",
      link: "/receiptMinderAppCase",
    },
    {
      image: require('../../assets/img/p4.png'),
      title: "Lifeline Laboratory",
      desc: "Our lab has facilities for safe sample storage and testing. We also have trained personal for data management and retrieval. We are part of numerous multicentric clinical.. ",
      link: "/lifeLineCase",
    },
    {
      image: require('../../assets/img/p5.png'),
      title: "Receipt Minder",
      desc: "A secure and intelligent platform for managing receipts digitally to help businesses and customers engage efficiently while making a positive impact on the environment.",
      link: "/receiptMinderWebCase",
    },
    {
      image: require('../../assets/img/p6.png'),
      title: "My Fitness Minder",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/fwiWebCase",
    },
    {
      image: require('../../assets/img/p7.png'),
      title: "Projectlife-COVID App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/projectLifeCase",
    },
    {
      image: require('../../assets/img/p8.png'),
      title: "Labour Care Guide",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/lcgAppCase",
    },
    {
      image: require('../../assets/img/p9.png'),
      title: "Labour Care Guide Web",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/lcgWebAppCase",
    },
    {
      image: require('../../assets/img/p10.png'),
      title: "Smarten Web",
      desc: "Smarten Power Systems is more than an inverter company. Since its inception in 2014, Smarten has been defined by the vision of its founders: to put the company...",
      link: "/smartenCase",
    },
    {
      image: require('../../assets/img/p11.png'),
      title: "VloSum App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/vlosumCase",
    },
    {
      image: require('../../assets/img/p12.png'),
      title: "Vehicle Care App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/vehicleCase",
    },
    {
      image: require('../../assets/img/petrolpump_web.png'),
      title: "Petrol Pump Management",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/petrolpump",
    },
    {
      image: require('../../assets/img/4cast_web.png'),
      title: "4Cast App",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/fourcastApp",
    },
    {
      image: require('../../assets/img/bedbureau_web.png'),
      title: "Bed Bureau Management",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/bedbureau",
    },
    {
      image: require('../../assets/img/curebee_web.png'),
      title: "The Cure Bee",
      desc: "Curebee provides instant, drug-free relief from menstrual cramps and period pain. With the touch of a button, the wearable device stimulates nerves to block pain.",
      link: "/curebee",
    },
    {
      image: require('../../assets/img/iplant_web.png'),
      title: "iPlant: Cafe & Lounge",
      desc: "The core philosophy of iPlant Cafe and lounge is to introduce mass about Hydroponics, by bringing them together to have their meal, made with restaurant-grown hydroponics veggies.",
      link: "/iplant",
    },
    {
      image: require('../../assets/img/wellsoon_web.png'),
      title: "Get well soon",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/getwellsoon",
    },
  ];
  return (
    <section>
      <div className="pricing-tables border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>Crafted with Love build with Passion</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-banner">
        <div className="container">
          <div className="row">
          
            {portfolioData.map((item) => (
              <div className="col-lg-6">
                <ScrollAnimation  animateIn="fadeIn" initiallyVisible={true} animateOut='fadeOut'  >
                <div className="item">
                  <img src={item.image} />
                  <div className="section-heading">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className="link">
                    <a href={item.link}>View Case Study </a>
                  </div>
                </div>
                </ScrollAnimation>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
