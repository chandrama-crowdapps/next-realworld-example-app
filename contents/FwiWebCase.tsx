import React from 'react'
import SubNavbar from "../components/SubNavbar";
import CaseStudy from "../components/cases/CaseStudy";
import FeedBack from "../components/cases/FeedBack";
import OverviewWeb from "../components/cases/OverviewWeb";
import ProjectGoal from "../components/cases/ProjectGoal";
import OurProcess from "../components/cases/OurProcess";
import LetsTalk from "../components/home/LetsTalk";
import MoreCase from "../components/cases/MoreCase";
import DesignDetail from "../components/cases/DesignDetail";
import Prototype from "../components/cases/Prototype";
import Footer from '../components/Footer';
export default function FwiWebCase() {
   // case study data
   const caseStudyData = {
    title: "My Fitness Minder",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled .",
    image: require("../assets/caseStudy/Fwi/web.png"),
    client:"My Fitness Minder",
      project:"Fitness",
      platform:"Application & Website"
  };
  // client feedback data
  const feedbackData = [
    {
      logo: require("../assets/caseStudy/Fwi/logo.png"),
      client_name: "Ariz",
      client_position: "xxx",
      feedback:
        "They were fantactic in developing the react native foundation for the mobile side of our product. Not only were they quick to respond, but their code base is proving to be extremely solid. They have been great at explaining what it was they have been doing and interpreting the end results that we needed. I can't quite believe my luck in finding them, I 100% plan to use them again in the future.",
    },
    {
      logo: require("../assets/caseStudy/Fwi/logo.png"),
      client_name: "Ariz",
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
        img: require("../assets/caseStudy/Fwi/overview_web.png"),
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
      prototypeImg: require("../assets/caseStudy/Fwi/prototype.png"),
    },
   
  ];
  // Design Details
  const designData =    {
      identity:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      color_plate:[
        {
          color:'#FF8E56'
        },
        {
          color:'#2C2640'
        },
        {
          color:'#A6DCD4'
        },
        {
          color:'#FF878E'
        },
        {
          color:'#C8C6CE'
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
      client={caseStudyData.client}
        project={caseStudyData.project}
        platform={caseStudyData.platform}
    />
    <FeedBack feedbackData={feedbackData} />
    <OverviewWeb overviewData={overviewData}  />
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
