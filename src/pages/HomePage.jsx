import React from "react";
import Header from "../ui/Header";
import HeroSection from "../features/homepage/HeroSection";

const HomePage = () => {
  return (
    <>
      <div className="bg-hero-color max-w-[1440px] -z-50 mx-auto">
        <Header />
        <HeroSection />
      </div>
      <div></div>
    </>
  );
};

export default HomePage;
