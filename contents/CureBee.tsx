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
export default function CureBee() {
  // case study data
  const caseStudyData = {
    title: "The Cure Bee",
    description:
      "Curebee provides instant, drug-free relief from menstrual cramps and period pain. With the touch of a button, the wearable device stimulates nerves to block pain. The technology behind the curebee is based on the “Gate Control Theory” and works by transmitting a very unique pulse to keep the nerves “busy.” When the nerves are stimulated, the nerve gate is closed, preventing pain signals from reaching the brain and being felt.",
    image: require("../assets/img/curebee_web.png"),
    client:"The Curebee",
      project:"Social",
      platform:"Website"
  };
  // client feedback data
  const feedbackData = [
    {
      logo: require("../assets/img/curebee_logo.png"),
      client_name: "Gurpreet Gaur",
      client_position: "xxx",
      feedback:
        "The Curebee helped to keep me comfortable even when the meds started to wear off. It was very comfortable to wear as well.",
    },
    {
      logo: require("../assets/img/curebee_logo.png"),
      client_name: "Poonam",
      client_position: "xxx",
      feedback:
        "My daughter loves this product which really helps her , A big surprise was to get 3 months replacement gel pads.",
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
        img: require("../assets/img/curebee_overview.png"),
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
      prototypeImg: require("../assets/img/curebee_prototype.png"),
    },
   
  ];
  // Design Details
  const designData =    {
      identity:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      color_plate:[
        {
          color:'#D32668'
        },
        {
          color:'#2F2454'
        },
        {
          color:'#F992BC'
        },
        {
          color:'#FFCDE0'
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
