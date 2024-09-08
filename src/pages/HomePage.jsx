import React from "react";
import Header from "../ui/Header";
import HeroSection from "../features/homepage/HeroSection";
import StatisticsSection from "../features/homepage/StatisticsSection";
import CausesSection from "../features/homepage/CausesSection.jsx";
import DonateSection from "../features/homepage/DonateSection";

const HomePage = () => {
  return (
    <>
      <div className="bg-hero-color max-w-[1440px] -z-50 mx-auto relative">
        <Header />
        <HeroSection />
        <StatisticsSection />
      </div>
      <div className="max-w-[1440px] mx-auto">
        <CausesSection />
        <DonateSection />
      </div>
    </>
  );
};

export default HomePage;
