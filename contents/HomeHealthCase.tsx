import React from "react";
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
import Footer from "../components/Footer";
export default function HomeHealthCase() {
  // case study data
  const caseStudyData = {
    title: "Health Care App",
    description:
      "This app is helping a large number of patients globally who want to connect digitally with their concerned doctors, track their health condition and medication. It keeps on tracking the daily health-related activities and very simple to use. The progress chart will keep the user updated about the current Health status. This also provides a medication reminder. Hence, you will never miss an appointment to follow up with the doctor.",
    image: require("../assets/caseStudy/p1.png"),
    client:"Home Health",
      project:"Health Care",
      platform:"Application"
  };
  // client feedback data
  const feedbackData = [
    {
      logo: require("../assets/img/homehealth_logo.png"),
      client_name: "John P",
      client_position: "xxx",
      feedback:
        "Just to say a big thank you for the excellent services provided by Home Health Care. She was punctual, polite and looked after my mother in a very caring manner which was really helpful and very much appreciated. I would highly recommend India Home Health Care if anyone is looking for any assistance to take care of their elderly family & friends with a personal touch!",
    },
    {
      logo: require("../assets/img/homehealth_logo.png"),
      client_name: "John P",
      client_position: "xxx",
      feedback:
        "I have been associated with ‘Home Health Care’ for a few months now. I have referred many of my patients, who need care at home, to this organization. I have received a very good feedback from such patients. They are satisfied and peaceful with the quality of service and personal care by the attending staff. ‘India Home Health care’ is systematic and prompt in taking care of the patients, including maintenance of patients records and periodic reviewing. I am able to appreciate the that because it helps a lot in patient management. Best wishes to India Home Health Care. We pray that the Almighty give the strength and confidence for them to continue this venture successfully, forever",
    },
  ];
  // Overview data
  const overviewData = {
    para1:
      "We provide high quality, individualized care for patients of all ages where you feel most comfortable – your home or community. Our services and equipment are designed to help you regain and retain a level of independence. ",
    para2:
      "",
    images: [
      {
        img: require('../assets/img/homehealth_overview.png'),
      },
    ],
  };
  // Project data
  const projectData = {
    para: "Our professional teams meet the highest quality health care standards because we take extra steps to ensure clinical excellence and safety. Our stringent hiring standards include credential verification and background checks of all applicants. In addition to in-depth interviews, written testing, and hands-on skills assessments, we also evaluate core values of compassion, excellence, and reliability. All our nursing professionals are supervised by a senior registered nurse who makes regular home visits to ensure the health and safety of your elders. Caregivers are also required to demonstrate their competency annually, with hands-on skills assessments and performance evaluations.",
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
      prototypeImg: require("../assets/img/pro-1.png"),
    },
    {
      prototypeImg: require("../assets/img/pro-2.png"),
    },
    {
      prototypeImg: require("../assets/img/pro-3.png"),
    },
    {
      prototypeImg: require("../assets/img/pro-4.png"),
    },
    {
      prototypeImg: require("../assets/img/pro-1.png"),
    },
    {
      prototypeImg: require("../assets/img/pro-2.png"),
    },
    {
      prototypeImg: require("../assets/img/pro-3.png"),
    },
    {
      prototypeImg: require("../assets/img/pro-4.png"),
    },
  ];
  // Design Details
  const designData =    {
      identity:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      color_plate:[
        {
          color:'#FF6968'
        },
        {
          color:'#FF660C'
        },
        {
          color:'#25282B'
        },
        {
          color:'#969DAB'
        },
        {
          color:'#EEF2F3'
        },
        {
          color:'#3CCB97'
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
