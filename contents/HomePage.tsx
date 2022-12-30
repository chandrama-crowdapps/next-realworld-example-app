import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import Banner from "../components/home/Banner";
import About from "../components/home/About";
import Award from "../components/home/Award";
import RedBar from "../components/RedBar";
import Services from "../components/home/Services";
import BlackBar from "../components/BlackBar";
import Experties from "../components/home/Experties";
import ChooseUs from "../components/home/ChooseUs";
import Technology from "../components/home/Technology";
import Testimonial from "../components/home/Testimonials";
import LetsTalk from "../components/home/LetsTalk";
// import Loader from "../components/Loader";
import ClipLoader from 'react-spinners/ClipLoader';
import Footer from "../components/Footer";

function HomePage() {
  const [loading, setLoading] = useState(false);
  // const [loading, setLoading] = React.useState(false);
  // React.useEffect(() => {
  //   setLoading(true);
  // }, []);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  return (
    <>
      {loading  ? (
        <>
        <div className="loader-container">
          {/* <ClipLoader color={'#fff'}  size={6} /> */}
          <ClipLoader color="#36d7b7" />
        </div>
        <div className="loader-container">
        <div className="spinner"></div>
      </div>
      </>

      ) : (
    <div className="main-content">
     <Navbar/>
      <Banner />
      <RedBar />
      <Services />
      <BlackBar />
      <About />
      <Award />
      <Experties />
      <ChooseUs />
      <Technology />
      <Testimonial />
      <LetsTalk />
      <Footer/>
    </div>
    
      )}
      </>
  );
}

export default HomePage;
