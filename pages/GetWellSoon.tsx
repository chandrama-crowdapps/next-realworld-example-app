import React from 'react'
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
export default function GetWellSoon() {
  // case study data
  const caseStudyData = {
    title: "Get well soon",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled .",
    image: require("../assets/img/wellsoon_web.png"),
  };
  // client feedback data
  const feedbackData = [
    {
      logo: require("../assets/img/wellsoon_logo.png"),
      client_name: "Priyanka Sapra",
      client_position: "xxx",
      feedback:
        "They were fantactic in developing the react native foundation for the mobile side of our product. Not only were they quick to respond, but their code base is proving to be extremely solid. They have been great at explaining what it was they have been doing and interpreting the end results that we needed. I can't quite believe my luck in finding them, I 100% plan to use them again in the future.",
    },
    {
      logo: require("../assets/img/wellsoon_logo.png"),
      client_name: "Priyanka Sapra",
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
        img: require("../assets/img/wellsoon_overview.png"),
      },
    ],
  };
  // Project data
  const projectData = {
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };
  //  Our Project
  
  // Prototype
  const prototypeData = [
    {
      prototypeImg: require("../assets/img/wellsoon_prototype.png"),
    },
   
  ];
  // Design Details
  const designData =    {
      identity:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      color_plate:[
        {
          color:'#8420BB'
        },
        {
          color:'#410B60'
        },
        {
          color:'#C86CFB'
        },
        {
          color:'#1C1B2D'
        },
        {
          color:'#F5E7FD'
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
      />
      <FeedBack feedbackData={feedbackData} />
      <OverviewWeb overviewData={overviewData} />
      <ProjectGoal para={projectData.para} />
      <OurProcess />
      <DesignDetail designData={designData}/>
      <Prototype prototypeData={prototypeData} />
      <MoreCase />
      <LetsTalk />
      <Footer/>
    </section>
  );
}
