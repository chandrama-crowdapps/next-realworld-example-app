import React from "react";
import Footer from "../components/Footer";
import PortfolioCard from "../components/portfolio/portfolioCard";
import SubNavbar from "../components/SubNavbar";
export default function Portfolio() {
  return (
    <div>
      <SubNavbar/>
      <PortfolioCard />
      <Footer/>
    </div>
  );
}
