import React from 'react';
import SubNavbar from "../components/SubNavbar";
import CaseStudy from "../components/cases/CaseStudy";
import FeedBack from "../components/cases/FeedBack";
import OverviewWeb from "../components/cases/OverviewWeb";
import ProjectGoal from "../components/cases/ProjectGoal";
import OurProcess from "../components/cases/OurProcess";
import Wireframe from "../components/cases/Wireframe";
import LetsTalk from "../components/home/LetsTalk";
import MoreCase from "../components/cases/MoreCase";
import DesignDetail from "../components/cases/DesignDetail";
import Prototype from "../components/cases/Prototype";
import Footer from '../components/Footer';
export default function FourCastApp() {
  // case study data
  const caseStudyData = {
    title: "4Cast App",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled .",
    image: require("../assets/img/4cast_web.png"),
  };
  // client feedback data
  const feedbackData = [
    {
      logo: require("../assets/img/4cast_logo.png"),
      client_name: "John P",
      client_position: "xxx",
      feedback:
        "They were fantactic in developing the react native foundation for the mobile side of our product. Not only were they quick to respond, but their code base is proving to be extremely solid. They have been great at explaining what it was they have been doing and interpreting the end results that we needed. I can't quite believe my luck in finding them, I 100% plan to use them again in the future.",
    },
    {
      logo: require("../assets/img/4cast_logo.png"),
      client_name: "John P",
      client_position: "xxx",
      feedback:
        "They were fantactic in developing the react native foundation for the mobile side of our product. Not only were they quick to respond, but their code base is proving to be extremely solid. They have been great at explaining what it was they have been doing and interpreting the end results that we needed. I can't quite believe my luck in finding them, I 100% plan to use them again in the future.",
    },
  ];
  // Overview data
  const overviewData = {
    para1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    para2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [
      {
        img:require("../assets/img/4cast_overview.png"),
      },
    ],
  };
  // Project data
  const projectData = {
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      prototypeImg: require("../assets/img/fcast_prototype.png"),
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
          color:'#0F123F'
        },
        {
          color:'#25282B'
        },
        {
          color:'#969DAB'
        },
        {
          color:'#3CCB97'
        },
        
      ],
      typography:{
        fontName:'Montserrat',
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
      />
      <FeedBack feedbackData={feedbackData} />
      <OverviewWeb overviewData={overviewData}  />
      <ProjectGoal para={projectData.para} />
      <OurProcess />
      <Wireframe wireframeData={wireframeData} />
      <DesignDetail designData={designData}/>
      <Prototype prototypeData={prototypeData} />
      <MoreCase />
      <LetsTalk />
      <Footer/>
    </section>
  );
}
