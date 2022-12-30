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
export default function SmartenCase() {
    // case study data
    const caseStudyData = {
      title: "Smarten Web",
      description:
        "Smarten Power Systems is more than an inverter company. Since its inception in 2014, Smarten has been defined by the vision of its founders: to put the company at the forefront of the evolution to a renewable energy future. This vision is enshrined in the company’s brand statement, Fusion is the Future, which is a salute to the nuclear fusion reactions in the Sun which are the ultimate source of all power on the Earth.",
      image: require("../assets/caseStudy/Smarten/web.png"),
      client:"Smarten",
      project:"Electronics",
      platform:"Web"
    };
    // client feedback data
    const feedbackData = [
      {
        logo: require("../assets/caseStudy/Smarten/logo.png"),
        client_name: "Priyanka Sapra",
        client_position: "xxx",
        feedback:
          "Smarten has made its own value in the market with its quality. Product & service are the two primary aspect for any company to rise and smarten has both of these that too up to the mark. The growth of the company is tremendous as management of the Smarten is really efficient.",
      },
      {
        logo: require("../assets/caseStudy/Smarten/logo.png"),
        client_name: "Priyanka Sapra",
        client_position: "xxx",
        feedback:
          "My association with smarten is ongoing from their inception that is 2014.  We get quite good response from the market for every product that smarten launches. Competition brands are there but we prefer to sell Smarten more owing to their quality. Smarten keeps on making amendments as per ongoing trend, such technology & quality improvement helps us as distributors as well as customers. Suthe As MPPT is launched by Smarten",
      },
    ];
    // Overview data
    const overviewData = {
      para1:
        "Smarten has developed a range of unique Power Backup Solutions and Solar Products which differentiate it from the Industry. The diverse product range includes Home UPS, Inverters, Solar Power Conditioning Units, Solar Charge Controllers, Solar Inverters, Solar Panels, Batteries, Off-Grid Solutions, Grid Tie Inverters and Customized Solar Solutions. Smarten’s products are designed and manufactured in-house to exacting standards and best-practice processes and are backed up in the field by unmatched reliability and the company’s renowned service support. Due to a clear focus on quality throughout the organisation’s operations, Smarten has rapidly established a footprint across India as well as further afield in Nepal, Bangladesh, Afghanistan, Dubai, Nigeria, Benin, Uganda and South Africa.",
      para2:
        "",
      images: [
        {
          img: require("../assets/caseStudy/Smarten/overview.png"),
        },
      ],
    };
    // Project data
    const projectData = {
      para: "To overcome all obstacles through passionate innovation and creative thinking- technological, financial and legal- that stand in the way of the Earth completely run by clean energy. To create affordable and innovative power solutions that can be adopted by everyone, even the financially weak in Asia, Africa and the Americas.",
    };
    //  Our Project
    
    // Prototype
    const prototypeData = [
      {
        prototypeImg: require("../assets/caseStudy/Smarten/prototype.png"),
      },
     
    ];
    // Design Details
    const designData =    {
        identity:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        color_plate:[
          {
            color:'#0F509A'
          },
          {
            color:'#F0B543'
          },
          {
            color:'#1B1B1B'
          },
          {
            color:'#969DAB'
          },
          {
            color:'#0098DD'
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
    <Footer />
  </section>
  )
}
