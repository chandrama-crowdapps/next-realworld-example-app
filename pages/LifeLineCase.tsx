import React from 'react'
import SubNavbar from "../components/SubNavbar";
import CaseStudy from "../components/cases/CaseStudy";
import FeedBack from "../components/cases/FeedBack";
import Overview from "../components/cases/Overview";
import ProjectGoal from "../components/cases/ProjectGoal";
import OurProcess from "../components/cases/OurProcess";
import Wireframe from "../components/cases/Wireframe";
import LetsTalk from "../components/home/LetsTalk";
import MoreCase from "../components/cases/MoreCase";
import DesignDetail from "../components/cases/DesignDetail";
import PrototypeApp from "../components/cases/PrototypeApp";
import Footer from '../components/Footer';
export default function LifeLineCase() {
  // case study data
  const caseStudyData = {
    title: "Lifeline Labouratory",
    description:
      "Our lab has facilities for safe sample storage and testing. We also have trained personal for data management and retrieval. We are part of numerous multicentric clinical trials with institutions & pharma companies. The laboratory maintains a database of over ten year and periodically we analyze the trends in various disease patterns based on our data. ",
    image: require("../assets/caseStudy/Lifeline/caseStudy.png"),
    client:"Lifeline Labouratory",
      project:"Social",
      platform:"Application & Website"
  };
  // client feedback data
  const feedbackData = [
    {
      logo: require("../assets/caseStudy/Lifeline/logo.png"),
      client_name: "Ariz",
      client_position: "xxx",
      feedback:
        "To be very honest it is the best Pathology and diagnostic centre in New Delhi. All computerised devices are used for diagnostic test here, staff is really very helpful. ambience is good. i will highly recommend this pathalogy.",
    },
    {
      logo: require("../assets/caseStudy/Lifeline/logo.png"),
      client_name: "Ariz",
      client_position: "xxx",
      feedback:
        "To be very honest it is the best Pathology and diagnostic centre in New Delhi. All computerised devices are used for diagnostic test here, staff is really very helpful. ambience is good. i will highly recommend this pathalogy.",
    },
  ];
  // Overview data
  const overviewData = {
    para1:
      "Our team which includes phlebotomists, technicians, quality supervisors, administrative supervisors and couriers who are highly motivated and dedicated. To keep up their level of motivation, the laboratory is very involved with their welfare, and many welfare programmes are inducted which include PF, ESI, Insurance Etc. The laboratory is backed by a workforce of over fifty five employees who are motivated to do their job well along with a human touch. It is emphasized that behind every sample and report there is a person who has reposed their trust in us for their diagnosis and treatment. Each and every patient is given personalized care by our team of doctors and all records along with the trends are maintained with us. The doctors & patients are informed immediately in case of alert reports or an abnormal change in the trends. Training is very rigorous and the workforce is repeatedly trained for maximum efficiency. Training programmes are scheduled for the whole year. The Internal Audits are conducted on a regular basis to supervise the work.",
    para2:
      "",
    images: [
      {
        img: require('../assets/caseStudy/Lifeline/mobile.png'),
      },
    ],
  };
  // Project data
  const projectData = {
    para: "Our laboratory is associated with a large number of clinical trials along with reputed institutions. We have well trained and dedicated staff who can handle high volume workload, and are meticulous in executing their work. Our lab has facilities for safe sample storage and testing. We also have trained personal for data management and retrieval. We are part of numerous multicentric clinical trials with institutions & pharma companies. The laboratory maintains a database of over ten year and periodically we analyze the trends in various disease patterns based on our data.",
  };
  //  Our Project
  // Wireframing
  const wireframeData = [
    {
      wireframeImg: require("../assets/caseStudy/wire1.png"),
    },
    {
      wireframeImg: require("../assets/caseStudy/wire2.png"),
    },
    {
      wireframeImg: require("../assets/caseStudy/wire3.png"),
    },
    {
      wireframeImg: require("../assets/caseStudy/wire4.png"),
    },
    {
      wireframeImg: require("../assets/caseStudy/wire5.png"),
    },
    {
      wireframeImg: require("../assets/caseStudy/wire6.png"),
    },
    {
      wireframeImg: require("../assets/caseStudy/wire7.png"),
    },
    {
      wireframeImg: require("../assets/caseStudy/wire8.png"),
    },
    {
      wireframeImg: require("../assets/caseStudy/wire9.png"),
    },
    {
      wireframeImg: require("../assets/caseStudy/wire10.png"),
    },
    {
      wireframeImg: require("../assets/caseStudy/wire11.png"),
    },
    {
      wireframeImg: require("../assets/caseStudy/wire12.png"),
    },
  ];
  // Prototype
  const prototypeData = [
    {
      prototypeImg: require("../assets/caseStudy/Lifeline/pr1.png"),
    },
    {
      prototypeImg: require("../assets/caseStudy/Lifeline/pr2.png"),
    },
    {
      prototypeImg: require("../assets/caseStudy/Lifeline/pr3.png"),
    },
    {
      prototypeImg: require("../assets/caseStudy/Lifeline/pr4.png"),
    },
    {
      prototypeImg: require("../assets/caseStudy/Lifeline/pr1.png"),
    },
    {
      prototypeImg: require("../assets/caseStudy/Lifeline/pr2.png"),
    },
    {
      prototypeImg: require("../assets/caseStudy/Lifeline/pr3.png"),
    },
    {
      prototypeImg: require("../assets/caseStudy/Lifeline/pr4.png"),
    },
  ];
  // Design Details
  const designData =    {
      identity:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      color_plate:[
        {
          color:'#2C84C6'
        },
        {
          color:'#4EB748'
        },
        {
          color:'#7D8491'
        },
        {
          color:'#000000'
        },
        
      ],
      typography:{
        fontName:'Poppins',
        subFont:'(Regular, Medium, Bold)',
        fontTitle:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        fontPara:'abcdefghijklmnopqrstuvwxyz'
      }
    }
  return (
    <section>
      <SubNavbar />
      <CaseStudy
        title={caseStudyData.title}
        description={caseStudyData.description}
        image={caseStudyData.image}
        client={caseStudyData.client}
        project={caseStudyData.project}
        platform={caseStudyData.platform}
      />
      <FeedBack feedbackData={feedbackData} />
      <Overview overviewData={overviewData}  />
      <ProjectGoal para={projectData.para} />
      <OurProcess />
      <Wireframe wireframeData={wireframeData} />
      <DesignDetail designData={designData}/>
      <PrototypeApp prototypeData={prototypeData} />
      <MoreCase />
      <LetsTalk />
      <Footer/>
    </section>
  );
}
