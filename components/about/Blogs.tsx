import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import blogBanner from "../../assets/images/blogs.png";

export default function Blogs() {
  const recentStoryData = [
    {
      image: require("../../assets/images/blog_1.png"),
      field: "Technology",
      title: "Why Should You Choose React Native For Your App Project?",
      date: "February 12, 2022",
    },
    {
      image: require("../../assets/images/blog_2.png"),
      field: "Technology",
      title: "Picking The Best Language For iOS App Development In 2022",
      date: "February 12, 2022",
    },
    {
      image: require("../../assets/images/blog_3.png"),
      field: "Technology",
      title: "How to Prepare a Kickass UI/UX Strategy for E-Commerse",
      date: "February 12, 2022",
    },
    {
      image: require("../../assets/images/blog_4.png"),
      field: "Technology",
      title: "What is Metaverse and Where is it Headed?",
      date: "February 12, 2022",
    },
    {
      image: require("../../assets/images/blog_1.png"),
      field: "Technology",
      title: "Why Should You Choose React Native For Your App Project?",
      date: "February 12, 2022",
    },
    {
      image: require("../../assets/images/blog_2.png"),
      field: "Technology",
      title: "Picking The Best Language For iOS App Development In 2022",
      date: "February 12, 2022",
    },
    {
      image: require("../../assets/images/blog_3.png"),
      field: "Technology",
      title: "How to Prepare a Kickass UI/UX Strategy for E-Commerse",
      date: "February 12, 2022",
    },
    {
      image: require("../../assets/images/blog_4.png"),
      field: "Technology",
      title: "What is Metaverse and Where is it Headed?",
      date: "February 12, 2022",
    },
  ];
  return (
    <section>
      <div className="contact-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="inner-content">
                <h2>Blog</h2>
                <p>
                  Have a question or just want to say hi? We’d love to hear from
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Red Bar -->

    <!-- Our Technology --> */}

      <div className="blog-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-image">
                <img src={blogBanner} className="img-fluid w-100" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <span>Design</span>
                <h2>Tools that can run streamline your UX Research</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled .
                </p>
              </div>
              <div className="down-buttons mt-4">
                <div className="main-outline-button-hover">
                  <a href="/blogDetail">Are You Ready?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Recent Stories --> */}
      <div className="blog-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <span>Latest</span>
                <h2>Recent Stories</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {recentStoryData.map((item) => (
              <div className="col-lg-6">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-5">
                      <img className="story-img img-fluid" src={item.image} />
                    </div>
                    <div className="col-lg-7">
                      <div className="section-heading">
                        <p>{item.field}</p>
                        <h4>{item.title}</h4>
                      </div>
                      <div className="link">
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
