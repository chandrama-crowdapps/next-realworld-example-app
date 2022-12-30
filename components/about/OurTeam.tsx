import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import item1 from '../../assets/img/mission1.png'
import item2 from '../../assets/img/mission2.png'
import item3 from '../../assets/img/mission3.png'

import RedBar from "../RedBar";
export default function OurTeam() {
  const teamMember=[
    {
      image:require('../../assets/img/team1.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },
    {
      image:require('../../assets/img/team2.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },
    {
      image:require('../../assets/img/team3.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },
    {
      image:require('../../assets/img/team4.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },
    {
      image:require('../../assets/img/team5.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },
    {
      image:require('../../assets/img/team6.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },
    {
      image:require('../../assets/img/team7.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },
    {
      image:require('../../assets/img/team8.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },
    {
      image:require('../../assets/img/team1.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },
    {
      image:require('../../assets/img/team2.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },
    {
      image:require('../../assets/img/team3.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },
    {
      image:require('../../assets/img/team4.png'),
      name:'Rick Klauser',
      position:"Founder& Director"
    },

  ]
  return (
    <section>
        {/* <!-- Our Team --> */}
    <div className="mission-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 align-self-center">
            <div className="section-heading">

            <ScrollAnimation animateIn="flipInX">
              <h2>We’re a mission driven company</h2>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <p>
                Crowdapps brings business owners and there customers together in
                alliance to spread the good work of their business. Social proof
                through review & Understanding will drive our customer further.
              </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item1">
              <img src={item1}  />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item2">
            <img src={item2} />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item3">
            <img src={item3} />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Our Team -->
    <!-- Counter -->
    <!-- Red Bar --> */}
    <RedBar />
    {/* <!--Red Bar -->
    <!-- end of counter -->
    <!-- Our Team --> */}
    <div className="team-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <span>Team</span>
              <h2>Meet Our Team</h2>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMember.map((item)=>(
            <div className="col-lg-3 col-6">
            <div className="item">
              <img src={item.image} />
              <div className="section-heading">
                <h4>{item.name}</h4>
                <p>{item.position}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    {/* <!-- Our Team --> */}
    </section>
  )
}
