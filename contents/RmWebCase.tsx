import React from 'react'
import SubNavbar from '../components/SubNavbar'
import CaseStudy from "../components/cases/CaseStudy";
import FeedBack from "../components/cases/FeedBack";
import OverviewWeb from "../components/cases/OverviewWeb";
import ProjectGoal from "../components/cases/ProjectGoal";
import OurProcess from "../components/cases/OurProcess";
import LetsTalk from "../components/home/LetsTalk";
import MoreCase from "../components/cases/MoreCase";
import DesignDetail from "../components/cases/DesignDetail";
import Prototype from "../components/cases/Prototype";
import Footer from "../components/Footer";
export default function RmWebCase() {
  // case study data
  const caseStudyData = {
    title: "Receipt Minder",
    description:
      "A secure and intelligent platform for managing receipts digitally to help businesses and customers engage efficiently while making a positive impact on the environment.",
    image: require("../assets/caseStudy/Rm/web.png"),
    client:"Receipts Minder",
      project:"Save Paper",
      platform:"Application & Website"
  };
  // client feedback data
  const feedbackData = [
    {
      logo: require("../assets/caseStudy/Rm/logo.png"),
      client_name: "Priyanka Sapra",
      client_position: "xxx",
      feedback:
        "They were fantactic in developing the react native foundation for the mobile side of our product. Not only were they quick to respond, but their code base is proving to be extremely solid. They have been great at explaining what it was they have been doing and interpreting the end results that we needed. I can't quite believe my luck in finding them, I 100% plan to use them again in the future.",
    },
    {
      logo: require("../assets/caseStudy/Rm/logo.png"),
      client_name: "Priyanka Sapra",
      client_position: "xxx",
      feedback:
        "They were fantactic in developing the react native foundation for the mobile side of our product. Not only were they quick to respond, but their code base is proving to be extremely solid. They have been great at explaining what it was they have been doing and interpreting the end results that we needed. I can't quite believe my luck in finding them, I 100% plan to use them again in the future.",
    },
  ];
  // Overview data
  const overviewData = {
    para1:
      "ReceiptsMinder minimizes the use of paper receipts, protecting both staff and customers. Printed receipts usually contain toxic ingredients bisphenol A (BPA) and bisphenol S (BPS). These can be absorbed through the skin which can be harmful for both the cashier and for yourself.",
    para2:
      "ReceiptsMinder keeps your private data securely on the cloud, providing you with transparent communication and intuitive consent options, allowing you to review and withdraw your approval for processing your data at any time.",
    images: [
      {
        img: require("../assets/caseStudy/Rm/overview.png"),
      },
    ],
  };
  // Project data
  const projectData = {
    para: "We are a team of professionals bringing complementary skills and expertise from the fields of Finance, Technology, and Research aimed to provide an intelligent solution to free the world from paper receipt.",
  };
  //  Our Project
  
  // Prototype
  const prototypeData = [
    {
      prototypeImg: require("../assets/caseStudy/Rm/prototype.png"),
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
        fontName:'Comfortaa',
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
    <Footer />
  </section>
  )
}
