import React from "react";
import Hero from "../assets/images/blogDetail.png";
import ethinio from "../assets/images/ethinio.png";
import forms from "../assets/images/forms.png";
import ScrollAnimation from "react-animate-on-scroll";
import SubNavbar from "../components/SubNavbar";
import SimilarBog from "../components/about/SimilarBog";
import Footer from "../components/Footer";
export default function BlogDetail() {
  return (
    <section>
      <SubNavbar />
      <div className="pricing-tables">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-heading">
                <ScrollAnimation animateIn="flipInX">
                  <h2>Tools that can streamline your UX Research</h2>
                </ScrollAnimation>
                <p className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="career-banner offset-lg-1 mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <img src={Hero} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="section-heading">
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <h2>User Testing</h2>
              </ScrollAnimation>
              <p className="mt-3">
                This lies at the center of UX research. The following three
                tools will streamline your testing process and help you get
                valuable insights.
              </p>
              <p className="mt-3">
                Optimal workshop is a popular name when it comes to user
                testing. It has five powerful tools for your UX research: card
                sorting, tree testing, first-click testing, online surveys, and
                qualitative research. There are also inbuilt tools for analysis
                and recruitment. Many users find this tool for planning
                information architecture.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <h2>Recruiting</h2>
              </ScrollAnimation>
              <p className="mt-3">
                Where do you find the right kind of research participants for
                your study? The following tools will help make this process
                easier for you.
              </p>
              <p className="mt-3">
                With UXtweak, you can recruit testers from both your country as
                well as abroad. They also have more than 155 million panelists
                with over 2000 profile attributes so you can easily find
                participants with your detailed requirements. If you do not want
                to recruit participants from their selection, you can make use
                of their “recruiting widget”. With it, you can stick this widget
                onto your website or the sites that your target audience uses
                and recruit participants for multiple studies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <h2>Ethnio</h2>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-2">
            <img src={ethinio} className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 ">
            <div className="section-heading">
              <p className="mt-3">
                Ethnio is a recruitment-only platform that allows you to find,
                screen, incentivize, and manage participants. It also comes with
                an automated scheduling system that helps you manage different
                scenarios and participant touchpoints throughout the entire user
                experience. Their intercepts feature also lets you gather
                participants right from your product.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="section-heading">
            <ScrollAnimation animateIn="flipInX">
              <h2>Surveys and forms</h2>
              </ScrollAnimation>
              <p className="mt-3">
                Instead of manually putting in all the efforts, these two tools
                could help your quicken the process and also make it visually
                pleasing and functional for your users.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-2">
            <img src={forms} className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 ">
            <div className="section-heading">
              <p className="mt-3">
                Google Forms is a free tool where you can select from multiple
                question types, and add custom logic that shows questions based
                on answers that helps provide a seamless experience. You can
                also embed this survey into different apps like Zapier Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SimilarBog/>
      <Footer/>
    </section>
  );
}
